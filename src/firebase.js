import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDx1nRrw7aWIKFOOMG6MqUAaenMtdlY-oo',
  authDomain: 'atmgmt-sazo.firebaseapp.com',
  projectId: 'atmgmt-sazo',
  storageBucket: 'atmgmt-sazo.appspot.com',
  messagingSenderId: '956100942214',
  appId: '1:956100942214:web:795956e724eed06f7bf407',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Googleprovider = new GoogleAuthProvider();
const Githubproveider = new GithubAuthProvider();
const db = getFirestore(app);

export { auth, Googleprovider, Githubproveider, db };
