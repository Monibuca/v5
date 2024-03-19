package m7s

import (
	"context"
	"log/slog"
	"path/filepath"
	"reflect"
	"runtime"
	"strings"

	"m7s.live/m7s/v5/pkg/config"
)

type PluginMeta struct {
	Name    string
	Version string //插件版本
	Type    reflect.Type
}

type IPlugin interface {
	OnInit()
	OnEvent(any)
}

var plugins []PluginMeta

func InstallPlugin[C IPlugin](options ...any) error {
	var c C
	t := reflect.TypeOf(c).Elem()
	meta := PluginMeta{
		Name: t.Name(),
		Type: t,
	}

	_, pluginFilePath, _, _ := runtime.Caller(1)
	configDir := filepath.Dir(pluginFilePath)

	if _, after, found := strings.Cut(configDir, "@"); found {
		meta.Version = after
	} else {
		meta.Version = pluginFilePath
	}
	plugins = append(plugins, meta)
	return nil
}

type Plugin struct {
	Disabled                bool
	Meta                    *PluginMeta
	context.Context         `json:"-" yaml:"-"`
	context.CancelCauseFunc `json:"-" yaml:"-"`
	Config                  struct {
		config.Publish
		config.Subscribe
		config.HTTP
		config.Quic
		config.TCP
		config.Pull
		config.Push
	}
	Publishers []*Publisher
	*slog.Logger
	handler IPlugin
	server  *Server
}

func (p *Plugin) PostMessage(message any) {
	p.server.EventBus <- message
}

func (p *Plugin) Publish(streamPath string) (publisher *Publisher, err error) {
	publisher = &Publisher{Plugin: p, Config: p.Config.Publish, Logger: p.With("streamPath", streamPath)}
	return
}
