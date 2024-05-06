import { initializeApp } from "firebase/app";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
  onAuthStateChanged, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import Swal from 'sweetalert2'

const firebaseConfig = {
  apiKey: "AIzaSyD195F2zoBDofAcRCDuCpFuPCsiunl_Toc",
  authDomain: "data-echo-prod.firebaseapp.com",
  projectId: "data-echo-prod",
  storageBucket: "data-echo-prod.appspot.com",
  messagingSenderId: "22393559285",
  appId: "1:22393559285:web:d549056dd6de31a27d4dbc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function userSignUp(data) {
  const { email, password } = data

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log('user', user);
      Swal.fire({
        title: "Good job!",
        text: "Register Successfull!",
        icon: "success"
      });
      setTimeout(() => {
        window.location.href = ('signin')
      }, 2000);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message);
      // ..
    });
}

export async function userSignIn(data) {
  const { email, password } = data
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      Swal.fire({
        title: "Good job!",
        text: "Sign In Successfull!",
        icon: "success"
      });
      setTimeout(() => {
        window.location.href = ('/')
      }, 2000);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/invalid-credential') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found Sign Up First!",
        });
        return
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something Went Wrong Try Again!",
      });
      return
    });
}

export async function userSignInWithGoogle() {
  try {
    await signInWithPopup(auth, provider)
    window.location.href = ('/')
  } catch (error) {
    console.error('Error Sign In With Google', error)
  }
}

export async function usersignOut() {
  try {
    await signOut(auth)
    Swal.fire({
      title: "Good job!",
      text: "Sign Out Successfull!",
      icon: "success"
    });
    setTimeout(() => {
      window.location.href = ('/')
    }, 2000);
  } catch (e) {
    alert(e.message)
  }
}

export { auth, onAuthStateChanged }