// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: cascade.proto

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ServerClient is the client API for Server service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServerClient interface {
	// GetClientList 获取所有级联客户端列表
	GetClientList(ctx context.Context, in *GetClientListRequest, opts ...grpc.CallOption) (*GetClientListResponse, error)
	// CreateClient 创建新的级联客户端
	CreateClient(ctx context.Context, in *CreateClientRequest, opts ...grpc.CallOption) (*CreateClientResponse, error)
	// UpdateClient 更新级联客户端
	UpdateClient(ctx context.Context, in *UpdateClientRequest, opts ...grpc.CallOption) (*UpdateClientResponse, error)
	// DeleteClient 删除级联客户端
	DeleteClient(ctx context.Context, in *DeleteClientRequest, opts ...grpc.CallOption) (*DeleteClientResponse, error)
}

type serverClient struct {
	cc grpc.ClientConnInterface
}

func NewServerClient(cc grpc.ClientConnInterface) ServerClient {
	return &serverClient{cc}
}

func (c *serverClient) GetClientList(ctx context.Context, in *GetClientListRequest, opts ...grpc.CallOption) (*GetClientListResponse, error) {
	out := new(GetClientListResponse)
	err := c.cc.Invoke(ctx, "/cascade.server/GetClientList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serverClient) CreateClient(ctx context.Context, in *CreateClientRequest, opts ...grpc.CallOption) (*CreateClientResponse, error) {
	out := new(CreateClientResponse)
	err := c.cc.Invoke(ctx, "/cascade.server/CreateClient", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serverClient) UpdateClient(ctx context.Context, in *UpdateClientRequest, opts ...grpc.CallOption) (*UpdateClientResponse, error) {
	out := new(UpdateClientResponse)
	err := c.cc.Invoke(ctx, "/cascade.server/UpdateClient", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serverClient) DeleteClient(ctx context.Context, in *DeleteClientRequest, opts ...grpc.CallOption) (*DeleteClientResponse, error) {
	out := new(DeleteClientResponse)
	err := c.cc.Invoke(ctx, "/cascade.server/DeleteClient", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServerServer is the server API for Server service.
// All implementations must embed UnimplementedServerServer
// for forward compatibility
type ServerServer interface {
	// GetClientList 获取所有级联客户端列表
	GetClientList(context.Context, *GetClientListRequest) (*GetClientListResponse, error)
	// CreateClient 创建新的级联客户端
	CreateClient(context.Context, *CreateClientRequest) (*CreateClientResponse, error)
	// UpdateClient 更新级联客户端
	UpdateClient(context.Context, *UpdateClientRequest) (*UpdateClientResponse, error)
	// DeleteClient 删除级联客户端
	DeleteClient(context.Context, *DeleteClientRequest) (*DeleteClientResponse, error)
	mustEmbedUnimplementedServerServer()
}

// UnimplementedServerServer must be embedded to have forward compatible implementations.
type UnimplementedServerServer struct {
}

func (UnimplementedServerServer) GetClientList(context.Context, *GetClientListRequest) (*GetClientListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetClientList not implemented")
}
func (UnimplementedServerServer) CreateClient(context.Context, *CreateClientRequest) (*CreateClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateClient not implemented")
}
func (UnimplementedServerServer) UpdateClient(context.Context, *UpdateClientRequest) (*UpdateClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateClient not implemented")
}
func (UnimplementedServerServer) DeleteClient(context.Context, *DeleteClientRequest) (*DeleteClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteClient not implemented")
}
func (UnimplementedServerServer) mustEmbedUnimplementedServerServer() {}

// UnsafeServerServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServerServer will
// result in compilation errors.
type UnsafeServerServer interface {
	mustEmbedUnimplementedServerServer()
}

func RegisterServerServer(s grpc.ServiceRegistrar, srv ServerServer) {
	s.RegisterService(&Server_ServiceDesc, srv)
}

func _Server_GetClientList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetClientListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServerServer).GetClientList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cascade.server/GetClientList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServerServer).GetClientList(ctx, req.(*GetClientListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Server_CreateClient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServerServer).CreateClient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cascade.server/CreateClient",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServerServer).CreateClient(ctx, req.(*CreateClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Server_UpdateClient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServerServer).UpdateClient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cascade.server/UpdateClient",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServerServer).UpdateClient(ctx, req.(*UpdateClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Server_DeleteClient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServerServer).DeleteClient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cascade.server/DeleteClient",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServerServer).DeleteClient(ctx, req.(*DeleteClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Server_ServiceDesc is the grpc.ServiceDesc for Server service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Server_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "cascade.server",
	HandlerType: (*ServerServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetClientList",
			Handler:    _Server_GetClientList_Handler,
		},
		{
			MethodName: "CreateClient",
			Handler:    _Server_CreateClient_Handler,
		},
		{
			MethodName: "UpdateClient",
			Handler:    _Server_UpdateClient_Handler,
		},
		{
			MethodName: "DeleteClient",
			Handler:    _Server_DeleteClient_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cascade.proto",
}
