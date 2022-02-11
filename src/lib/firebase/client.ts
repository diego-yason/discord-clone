import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import config from "$lib/firebase/firebasekey";

let firebase: FirebaseApp;

if (getApps().length == 0) {
    firebase = initializeApp(config);
} else {
    firebase = getApps()[0]
}

export default firebase;
