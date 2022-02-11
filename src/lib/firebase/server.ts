import { App, cert, getApps } from "firebase-admin/app"
import { config } from "dotenv"
import { initializeApp } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore"
import { getStorage } from "firebase-admin/storage"
import { getAuth } from "firebase-admin/auth"
import { getAppCheck } from "firebase-admin/app-check"

config();

let firebase: App;

if (getApps().length == 0) {
    firebase = initializeApp({
        credential: cert(JSON.stringify(process.env.FIREBASE_KEY))
    });
} else {
    firebase = getApps()[0];
}

const firestore = getFirestore(firebase);
const storage = getStorage(firebase);
const auth = getAuth(firebase);
const appcheck = getAppCheck(firebase);

export { firebase, firestore, storage, auth, appcheck }