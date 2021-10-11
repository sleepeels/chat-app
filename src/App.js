import "./App.css";

// react hooks
import { createContext, useContext } from "react";

import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";

// firebase sdk
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// firebase init
firebase.initializeApp({
  // config
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIM,
  projectId: process.env.REACT_APP_PROJ_ID,
  storageBucket: process.env.REACT_APP_STORE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SEND_ID,
  appId: process.env.REACT_APP_APP_ID,
});

// objects for auth and store
const auth = firebase.auth();
const firestore = firebase.firestore();

const authObj = { auth, firestore, firebase, useCollectionData };

export const AuthContext = createContext(authObj);

function App() {
  const [user] = useAuthState(auth);

  return (
    <AuthContext.Provider value={authObj}>
      <div className="App">
        <header>
          <SignOut />
        </header>

        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
