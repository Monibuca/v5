package flv

import (
	"errors"

	"m7s.live/v5"
	"m7s.live/v5/pkg/util"
	rtmp "m7s.live/v5/plugin/rtmp/pkg"
)

type Puller struct {
	m7s.HTTPFilePuller
}

func (p *Puller) Run() (err error) {
	reader := util.NewBufReader(p.ReadCloser)
	publisher := p.PullJob.Publisher
	var hasAudio, hasVideo bool
	var absTS uint32
	var head util.Memory
	head, err = reader.ReadBytes(13)
	if err == nil {
		var flvHead [3]byte
		var version, flag byte
		err = head.NewReader().ReadByteTo(&flvHead[0], &flvHead[1], &flvHead[2], &version, &flag)
		if flvHead != [...]byte{'F', 'L', 'V'} {
			err = errors.New("not flv file")
		} else {
			hasAudio = flag&0x04 != 0
			hasVideo = flag&0x01 != 0
		}
	}
	var startTs uint32
	pubConf := &publisher.Publish
	if !hasAudio {
		pubConf.PubAudio = false
	}
	if !hasVideo {
		pubConf.PubVideo = false
	}
	allocator := util.NewScalableMemoryAllocator(1 << 10)
	for offsetTs := absTS; err == nil; _, err = reader.ReadBE(4) {
		if p.IsStopped() {
			return p.StopReason()
		}
		t, err := reader.ReadByte()
		if err != nil {
			return err
		}
		dataSize, err := reader.ReadBE32(3)
		if err != nil {
			return err
		}
		timestamp, err := reader.ReadBE32(3)
		if err != nil {
			return err
		}
		h, err := reader.ReadByte()
		if err != nil {
			return err
		}
		timestamp = timestamp | uint32(h)<<24
		if startTs == 0 {
			startTs = timestamp
		}
		if _, err = reader.ReadBE(3); err != nil { // stream id always 0
			return err
		}
		var frame rtmp.RTMPData
		ds := int(dataSize)
		frame.SetAllocator(allocator)
		err = reader.ReadNto(ds, frame.NextN(ds))
		if err != nil {
			return err
		}
		absTS = offsetTs + (timestamp - startTs)
		frame.Timestamp = absTS
		//fmt.Println(t, offsetTs, timestamp, startTs, puller.absTS)
		switch t {
		case FLV_TAG_TYPE_AUDIO:
			if publisher.PubAudio {
				if err = publisher.WriteAudio(frame.WrapAudio()); err != nil {
					return err
				}
			}
		case FLV_TAG_TYPE_VIDEO:
			if publisher.PubVideo {
				if err = publisher.WriteVideo(frame.WrapVideo()); err != nil {
					return err
				}
			}
		case FLV_TAG_TYPE_SCRIPT:
			r := frame.NewReader()
			amf := &rtmp.AMF{
				Buffer: util.Buffer(r.ToBytes()),
			}
			var obj any
			obj, err = amf.Unmarshal()
			name := obj
			obj, err = amf.Unmarshal()
			metaData := obj
			frame.Recycle()
			if err != nil {
				return err
			}
			publisher.Info("script", name, metaData)
		}
	}
	return
}
