// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDhIWeoFyXTnOg1olGRquFNIGLbs8YAYZ4",
  authDomain: "vie-de-dev-api.firebaseapp.com",
  projectId: "vie-de-dev-api",
  storageBucket: "vie-de-dev-api.appspot.com",
  messagingSenderId: "27768840204",
  appId: "1:27768840204:web:7c71735570f9329834ce29",
  measurementId: "G-86W4H44XR8"
});

const analytics = getAnalytics(app);

export const auth = app.auth();
export default app;