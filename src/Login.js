import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./base";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch(error => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/291/291122.svg"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to Vault</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;