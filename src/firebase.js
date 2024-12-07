import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut} from "firebase/auth"
import {addDoc,
     collection,
      getFirestore} from "firebase/firestore"
      
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBH0JigYtEn184MRFMqb1C9WaeD-9JZCO8",
  authDomain: "netflixasif-ebc33.firebaseapp.com",
  projectId: "netflixasif-ebc33",
  storageBucket: "netflixasif-ebc33.firebasestorage.app",
  messagingSenderId: "1032988164221",
  appId: "1:1032988164221:web:153889cc959a90e9fa7114",
  measurementId: "G-W1DG2YH9J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const database=getFirestore(app)

const signup=async(name,email,passsword)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,passsword);
        const user=res.user;
        await addDoc(collection(database,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email
        });
    }catch(error){
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const login=async(email,passsword)=>{
    try {
        await signInWithEmailAndPassword(auth,email,passsword);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const logout=()=>{
    signOut(auth);
}

 const getUserStatus = () => {
  return new Promise((resolve) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
};


export {auth, database,login,signup,getUserStatus,logout}