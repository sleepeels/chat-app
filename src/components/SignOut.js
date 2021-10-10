import { useContext } from "react";
import { AuthContext } from "../App";

function SignOut() {
  const { auth } = useContext(AuthContext);

  return (
    auth.currentUser && (
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </button>
    )
  );
}

export default SignOut;
