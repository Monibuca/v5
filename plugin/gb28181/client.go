package plugin_gb28181

import (
	"context"
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/emiago/sipgo"
	"github.com/emiago/sipgo/sip"
	"github.com/icholy/digest"
	"github.com/rs/zerolog"
	"m7s.live/v5/pkg/task"
	gb28181 "m7s.live/v5/plugin/gb28181/pkg"
)

type Client struct {
	task.Job
	*sipgo.Client
	srv       *sipgo.Server
	conf      *GB28181Plugin
	recipient sip.Uri
	tp        string
	sn        int
}

type KeepAlive struct {
	task.TickTask
	client *Client
}

func (k *KeepAlive) GetTickInterval() time.Duration {
	return time.Second * 60
}

func (k *KeepAlive) Tick(any) {
	req := sip.NewRequest("OnMessage", k.client.recipient)
	req.SetTransport(k.client.tp)
	req.SetBody(gb28181.BuildKeepAliveXML(k.client.sn, k.client.recipient.User))
	k.client.sn++
	_, err := k.client.Do(k.client.conf, req)
	if err != nil {
		k.client.conf.Error("keepalive", "error", err.Error())
	}
}

func (c *Client) Start() (err error) {
	netWork, parent, _ := strings.Cut(c.conf.Parent, ":")
	c.Client, err = sipgo.NewClient(c.conf.ua, sipgo.WithClientLogger(zerolog.New(os.Stdout)))
	if err != nil {
		return
	}
	c.srv, _ = sipgo.NewServer(c.conf.ua, sipgo.WithServerLogger(zerolog.New(os.Stdout)))
	contactHDR := sip.ContactHeader{
		Address: sip.Uri{
			User: c.conf.Serial,
			Host: c.conf.Realm,
		},
	}
	// sipgo.NewDialogServer(c.Client, contactHDR)
	sip.ParseUri(fmt.Sprintf("sip:%s", parent), &c.recipient)
	req := sip.NewRequest("REGISTER", c.recipient)
	req.AppendHeader(&contactHDR)
	c.tp = strings.ToUpper(netWork)
	req.SetTransport(c.tp)
	var res *sip.Response
	res, err = c.Do(c.conf, req)
	if err != nil {
		c.conf.Error("register", "error", err.Error())
	} else {
		c.conf.Info("register", "response", res.String())
		if res.StatusCode == 401 {
			// Get WwW-Authenticate
			wwwAuth := res.GetHeader("WWW-Authenticate")
			var chal *digest.Challenge
			chal, err = digest.ParseChallenge(wwwAuth.Value())
			if err != nil {
				c.conf.Error("register", "error", err.Error())
			}

			// Reply with digest
			cred, _ := digest.Digest(chal, digest.Options{
				Method:   req.Method.String(),
				URI:      c.recipient.Host,
				Username: c.conf.Username,
				Password: c.conf.Password,
			})

			newReq := req.Clone()
			newReq.RemoveHeader("Via") // Must be regenerated by tranport layer
			newReq.AppendHeader(sip.NewHeader("Authorization", cred.String()))

			ctx := context.Background()
			var tx sip.ClientTransaction
			tx, err = c.TransactionRequest(ctx, newReq, sipgo.ClientRequestAddVia)
			if err != nil {
				c.conf.Error("register", "error", err.Error())
			}
			defer tx.Terminate()

			res, err = getResponse(tx)
			if err != nil {
				c.conf.Error("register", "error", err.Error())
				return
			}
		}
		var ka KeepAlive
		ka.client = c
		c.AddTask(&ka)
	}
	return
}

func getResponse(tx sip.ClientTransaction) (*sip.Response, error) {
	select {
	case <-tx.Done():
		return nil, fmt.Errorf("transaction died")
	case res := <-tx.Responses():
		return res, nil
	}
}

func (c *Client) Run() (err error) {
	return
}