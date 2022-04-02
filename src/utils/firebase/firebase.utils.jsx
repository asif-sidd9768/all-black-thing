import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider,createUserWithEmailAndPassword } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYMpZZAOmr4ZxfBIu9RDAZR9MWIvGGt4U",  
    authDomain: "all-black-thing.firebaseapp.com",  
    projectId: "all-black-thing",  
    storageBucket: "all-black-thing.appspot.com",  
    messagingSenderId: "1055177085479",  
    appId: "1:1055177085479:web:e0ae1b2c0c7ed7814a3402"  
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInfo = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }catch(error){
            console.log("Error creating user document", error.message);
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return; 

    return await createUserWithEmailAndPassword(auth, email, password)
}


export const signAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}