import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBTdZB4pklVokLVWQCca21hg8NcjFpVbe4",
    authDomain: "the-online-bookshop.firebaseapp.com",
    projectId: "the-online-bookshop",
    storageBucket: "the-online-bookshop.appspot.com",
    messagingSenderId: "1085185932971",
    appId: "1:1085185932971:web:ab32813f360c8af14481ee"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;