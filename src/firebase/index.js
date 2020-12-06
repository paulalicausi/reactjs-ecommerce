import firebase from 'firebase/app';
import 'firebase/firestore'; 

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyDWr64SVh0LDuiuuhExw1a0cLB2FZnImvk",
        authDomain: "win95-shop.firebaseapp.com",
        projectId: "win95-shop",
        storageBucket: "win95-shop.appspot.com",
        messagingSenderId: "1036408803464",
        appId: "1:1036408803464:web:21a92df9612f1ed9918f3d"
      }
);

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore();
}

