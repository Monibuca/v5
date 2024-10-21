// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.19.1
// source: sei.proto

package pb

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	pb "m7s.live/v5/pb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type InsertRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	StreamPath       string `protobuf:"bytes,1,opt,name=streamPath,proto3" json:"streamPath,omitempty"`
	Data             []byte `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	Type             uint32 `protobuf:"varint,3,opt,name=type,proto3" json:"type,omitempty"`
	TargetStreamPath string `protobuf:"bytes,4,opt,name=targetStreamPath,proto3" json:"targetStreamPath,omitempty"`
}

func (x *InsertRequest) Reset() {
	*x = InsertRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_sei_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InsertRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InsertRequest) ProtoMessage() {}

func (x *InsertRequest) ProtoReflect() protoreflect.Message {
	mi := &file_sei_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InsertRequest.ProtoReflect.Descriptor instead.
func (*InsertRequest) Descriptor() ([]byte, []int) {
	return file_sei_proto_rawDescGZIP(), []int{0}
}

func (x *InsertRequest) GetStreamPath() string {
	if x != nil {
		return x.StreamPath
	}
	return ""
}

func (x *InsertRequest) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *InsertRequest) GetType() uint32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *InsertRequest) GetTargetStreamPath() string {
	if x != nil {
		return x.TargetStreamPath
	}
	return ""
}

var File_sei_proto protoreflect.FileDescriptor

var file_sei_proto_rawDesc = []byte{
	0x0a, 0x09, 0x73, 0x65, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x73, 0x65, 0x69,
	0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e,
	0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0c,
	0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x83, 0x01, 0x0a,
	0x0d, 0x49, 0x6e, 0x73, 0x65, 0x72, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1e,
	0x0a, 0x0a, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x50, 0x61, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0a, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x50, 0x61, 0x74, 0x68, 0x12, 0x12,
	0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61,
	0x74, 0x61, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x2a, 0x0a, 0x10, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74,
	0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x50, 0x61, 0x74, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x10, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x50, 0x61,
	0x74, 0x68, 0x32, 0x6b, 0x0a, 0x03, 0x61, 0x70, 0x69, 0x12, 0x64, 0x0a, 0x06, 0x69, 0x6e, 0x73,
	0x65, 0x72, 0x74, 0x12, 0x12, 0x2e, 0x73, 0x65, 0x69, 0x2e, 0x49, 0x6e, 0x73, 0x65, 0x72, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c,
	0x2e, 0x53, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x2d, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x27, 0x22, 0x1f, 0x2f, 0x73, 0x65, 0x69, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x69, 0x6e, 0x73, 0x65, 0x72, 0x74, 0x2f, 0x7b, 0x73, 0x74, 0x72, 0x65, 0x61,
	0x6d, 0x50, 0x61, 0x74, 0x68, 0x3d, 0x2a, 0x2a, 0x7d, 0x3a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x42,
	0x1f, 0x5a, 0x1d, 0x6d, 0x37, 0x73, 0x2e, 0x6c, 0x69, 0x76, 0x65, 0x2f, 0x6d, 0x37, 0x73, 0x2f,
	0x76, 0x35, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x2f, 0x73, 0x65, 0x69, 0x2f, 0x70, 0x62,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_sei_proto_rawDescOnce sync.Once
	file_sei_proto_rawDescData = file_sei_proto_rawDesc
)

func file_sei_proto_rawDescGZIP() []byte {
	file_sei_proto_rawDescOnce.Do(func() {
		file_sei_proto_rawDescData = protoimpl.X.CompressGZIP(file_sei_proto_rawDescData)
	})
	return file_sei_proto_rawDescData
}

var file_sei_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_sei_proto_goTypes = []interface{}{
	(*InsertRequest)(nil),      // 0: sei.InsertRequest
	(*pb.SuccessResponse)(nil), // 1: global.SuccessResponse
}
var file_sei_proto_depIdxs = []int32{
	0, // 0: sei.api.insert:input_type -> sei.InsertRequest
	1, // 1: sei.api.insert:output_type -> global.SuccessResponse
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_sei_proto_init() }
func file_sei_proto_init() {
	if File_sei_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_sei_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InsertRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_sei_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_sei_proto_goTypes,
		DependencyIndexes: file_sei_proto_depIdxs,
		MessageInfos:      file_sei_proto_msgTypes,
	}.Build()
	File_sei_proto = out.File
	file_sei_proto_rawDesc = nil
	file_sei_proto_goTypes = nil
	file_sei_proto_depIdxs = nil
}
