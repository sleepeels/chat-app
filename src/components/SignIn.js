import { useContext } from "react";

import { AuthContext } from "../App";

function SignIn() {
  const { auth, firebase } = useContext(AuthContext);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export default SignIn;
