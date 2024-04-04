package rtmp

import (
	"fmt"
	"time"

	"m7s.live/m7s/v5/pkg/util"
)

const (
	PacketTypeSequenceStart = iota
	PacketTypeCodedFrames
	PacketTypeSequenceEnd
	PacketTypeCodedFramesX
	PacketTypeMetadata
	PacketTypeMPEG2TSSequenceStart
)

var FourCC_H265 = [4]byte{'H', '2', '6', '5'}
var FourCC_AV1 = [4]byte{'a', 'v', '0', '1'}

type RTMPData struct {
	Timestamp uint32
	util.Buffers
	util.RecyclableMemory
}

func (avcc *RTMPData) GetSize() int {
	return avcc.Length
}

func (avcc *RTMPData) Print() string {
	return fmt.Sprintf("% 02X", avcc.Buffers.Buffers[0][:5])
}

func (avcc *RTMPData) GetTimestamp() time.Duration {
	return time.Duration(avcc.Timestamp) * time.Millisecond
}
func (avcc *RTMPData) IsIDR() bool {
	return false
}