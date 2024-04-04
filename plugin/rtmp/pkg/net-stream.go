package rtmp

type NetStream struct {
	*NetConnection
	StreamID uint32
}

func (ns *NetStream) Response(tid uint64, code, level string) error {
	m := new(ResponsePlayMessage)
	m.CommandName = Response_OnStatus
	m.TransactionId = tid
	m.Infomation = map[string]any{
		"code":        code,
		"level":       level,
		"description": "",
	}
	m.StreamID = ns.StreamID
	return ns.SendMessage(RTMP_MSG_AMF0_COMMAND, m)
}

func (ns *NetStream) BeginPublish(tid uint64) error {
	err := ns.SendStreamID(RTMP_USER_STREAM_BEGIN, ns.StreamID)
	if err != nil {
		return err
	}
	return ns.Response(tid, NetStream_Publish_Start, Level_Status)
}

func (ns *NetStream) BeginPlay(tid uint64) (err error) {
	err = ns.SendStreamID(RTMP_USER_STREAM_BEGIN, ns.StreamID)
	if err != nil {
		return err
	}
	err = ns.Response(tid, NetStream_Play_Reset, Level_Status)
	if err != nil {
		return
	}
	err = ns.Response(tid, NetStream_Play_Start, Level_Status)
	return
}