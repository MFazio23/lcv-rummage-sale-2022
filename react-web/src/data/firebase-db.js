import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyArAOcko7EUxNbYuaKMMrnGeDBtyjV29yM",
    authDomain: "faziodb.firebaseapp.com",
    databaseURL: "https://faziodb.firebaseio.com",
    projectId: "faziodb",
    storageBucket: "faziodb.appspot.com",
    messagingSenderId: "643110656924",
    appId: "1:643110656924:web:e80505f101825951484659"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

const dbRef = ref(database, "lcv-rummage-2022");

const getHouses = (onDBValue) => {
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        onDBValue(data);
    })
}

export {
    getHouses
}