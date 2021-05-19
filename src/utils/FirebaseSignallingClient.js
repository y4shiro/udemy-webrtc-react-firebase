import firebase from 'firebase/app';
import 'firebase/database';

export default class FirebaseSignallingClient {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCqdk8yWtTpMUA46WfUe4gLh3WZOk1z2dw',
      authDomain: 'webrtc-react-firebase-32dbe.firebaseapp.com',
      databaseURL:
        'https://webrtc-react-firebase-32dbe-default-rtdb.firebaseio.com',
      projectId: 'webrtc-react-firebase-32dbe',
      storageBucket: 'webrtc-react-firebase-32dbe.appspot.com',
      messagingSenderId: '64322745718',
      appId: '1:64322745718:web:dbe723bbe637d563a5f657',
    };
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
    this.localPeerName = '';
    this.remotePeerName = '';
  }

  setPeerNames(localPeerName, remotePeerName) {
    this.localPeerName = localPeerName;
    this.remotePeerName = remotePeerName;
  }

  get targetRef() {
    return this.database.ref(this.remotePeerName);
  }

  async sendOffer(sessionDescription) {
    await this.targetRef.set({
      type: 'offer',
      sender: this.localPeerName,
      sessionDescription,
    });
  }
}
