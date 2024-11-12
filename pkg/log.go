package pkg

import (
	"context"
	"log/slog"
	"slices"
	"sync"

	"m7s.live/v5/pkg/task"
)

var _ slog.Handler = (*MultiLogHandler)(nil)

func ParseLevel(level string) slog.Level {
	var lv slog.LevelVar
	if level == "trace" {
		lv.Set(task.TraceLevel)
	} else {
		lv.UnmarshalText([]byte(level))
	}
	return lv.Level()
}

type MultiLogHandler struct {
	handlers     []slog.Handler
	attrChildren sync.Map
	parentLevel  *slog.Level
	level        *slog.Level
}

func (m *MultiLogHandler) Add(h slog.Handler) {
	m.handlers = append(m.handlers, h)
	m.attrChildren.Range(func(key, value any) bool {
		child := key.(*MultiLogHandler)
		child.Add(h.WithAttrs(value.([]slog.Attr)))
		return true
	})
}

func (m *MultiLogHandler) Remove(h slog.Handler) {
	if i := slices.Index(m.handlers, h); i != -1 {
		m.handlers = slices.Delete(m.handlers, i, i+1)
	}
}

func (m *MultiLogHandler) SetLevel(level slog.Level) {
	if m.level == nil {
		m.level = &level
	} else {
		*m.level = level
	}
}

// Enabled implements slog.Handler.
func (m *MultiLogHandler) Enabled(_ context.Context, l slog.Level) bool {
	if m.level != nil {
		return l >= *m.level
	}
	return l >= *m.parentLevel
}

// Handle implements slog.Handler.
func (m *MultiLogHandler) Handle(ctx context.Context, rec slog.Record) error {
	for _, h := range m.handlers {
		if err := h.Handle(ctx, rec); err != nil {
			return err
		}
	}
	return nil
}

// WithAttrs implements slog.Handler.
func (m *MultiLogHandler) WithAttrs(attrs []slog.Attr) slog.Handler {
	result := &MultiLogHandler{
		handlers:    make([]slog.Handler, len(m.handlers)),
		parentLevel: m.parentLevel,
	}
	m.attrChildren.Store(result, attrs)
	if m.level != nil {
		result.parentLevel = m.level
	}
	for i, h := range m.handlers {
		result.handlers[i] = h.WithAttrs(attrs)
	}
	return result
}

// WithGroup implements slog.Handler.
func (m *MultiLogHandler) WithGroup(name string) slog.Handler {
	result := &MultiLogHandler{
		handlers:    make([]slog.Handler, len(m.handlers)),
		parentLevel: m.parentLevel,
	}
	if m.level != nil {
		result.parentLevel = m.level
	}
	for i, h := range m.handlers {
		result.handlers[i] = h.WithGroup(name)
	}
	return result
}
