export default class RtcClient {
  constructor(setRtcClient) {
    const config = {
      iceServers: [{ urls: 'stun:stun.stunprotocol.org' }],
    };
    this.rtcpeerConnection = new RTCPeerConnection(config);
    this.localPeerName = '';
    this.remotePeerName = '';
    this._setRtcClient = setRtcClient;
  }

  setRtcClient() {
    this._setRtcClient(this);
  }
}