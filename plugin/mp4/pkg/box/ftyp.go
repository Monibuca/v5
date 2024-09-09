package box

import (
	"encoding/binary"
	"io"
)

func mov_tag(tag [4]byte) uint32 {
	return binary.LittleEndian.Uint32(tag[:])
}

type FileTypeBox struct {
	Box               *BasicBox
	Major_brand       uint32
	Minor_version     uint32
	Compatible_brands []uint32
}

func NewFileTypeBox() *FileTypeBox {
	return &FileTypeBox{
		Box: NewBasicBox(TypeFTYP),
	}
}

func NewSegmentTypeBox() *FileTypeBox {
	return &FileTypeBox{
		Box: NewBasicBox(TypeSTYP),
	}
}

func (ftyp *FileTypeBox) Size() uint64 {
	return uint64(8 + len(ftyp.Compatible_brands)*4 + 8)
}

func (ftyp *FileTypeBox) decode(r io.Reader, size uint32) (int, error) {
	buf := make([]byte, size-BasicBoxLen)
	if n, err := io.ReadFull(r, buf); err != nil {
		return n, err
	}
	ftyp.Major_brand = binary.LittleEndian.Uint32(buf[0:])
	ftyp.Minor_version = binary.BigEndian.Uint32(buf[4:])
	n := 8
	for ; BasicBoxLen+n < int(size); n += 4 {
		ftyp.Compatible_brands = append(ftyp.Compatible_brands, binary.LittleEndian.Uint32(buf[n:]))
	}
	return n, nil
}

func (ftyp *FileTypeBox) Encode() (int, []byte) {
	ftyp.Box.Size = ftyp.Size()
	offset, buf := ftyp.Box.Encode()
	binary.LittleEndian.PutUint32(buf[offset:], ftyp.Major_brand)
	offset += 4
	binary.BigEndian.PutUint32(buf[offset:], ftyp.Minor_version)
	offset += 4
	for i := 0; offset < int(ftyp.Box.Size); offset += 4 {
		binary.LittleEndian.PutUint32(buf[offset:], ftyp.Compatible_brands[i])
		i++
	}
	return offset, buf
}

func decodeFtypBox(demuxer *MovDemuxer, size uint32) (err error) {
	ftyp := FileTypeBox{}
	if _, err = ftyp.decode(demuxer.reader, size); err != nil {
		return
	}
	demuxer.mp4Info.CompatibleBrands = ftyp.Compatible_brands
	demuxer.mp4Info.MajorBrand = ftyp.Major_brand
	demuxer.mp4Info.MinorVersion = ftyp.Minor_version
	return
}

func makeFtypBox(major uint32, minor uint32, compatibleBrands []uint32) []byte {
	ftyp := NewFileTypeBox()
	ftyp.Major_brand = major
	ftyp.Minor_version = minor
	ftyp.Compatible_brands = compatibleBrands
	_, boxData := ftyp.Encode()
	return boxData
}

func makeStypBox(major uint32, minor uint32, compatibleBrands []uint32) []byte {
	styp := NewSegmentTypeBox()
	styp.Major_brand = major
	styp.Minor_version = minor
	styp.Compatible_brands = compatibleBrands
	_, boxData := styp.Encode()
	return boxData
}
