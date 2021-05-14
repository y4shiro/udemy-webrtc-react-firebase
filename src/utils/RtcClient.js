export default class RtcClient {
  constructor() {
    const config = {
      iceServers: [{ urls: 'stun:stun.stunprotocol.org' }],
    };
    this.rtcpeerConnection = new RTCPeerConnection(config);
    this.localPeerName = '';
    this.remotePeerName = '';
  }
}
