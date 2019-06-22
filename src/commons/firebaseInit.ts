import firebase from 'firebase';
declare var GLOBAL_CONFIG: any;
const config = GLOBAL_CONFIG.FIREBASE_COINFIG;
const DEFAULT = '[DEFAULT]';

let defaultApp;

const _defaultApp = firebase.apps.find(app => app.name === DEFAULT);
if (_defaultApp) {
  defaultApp = _defaultApp;
} else {
  defaultApp = firebase.initializeApp(config, DEFAULT);
}

export default {
  default: {
    db: defaultApp.firestore(),
    auth: defaultApp.auth()
  }
};
