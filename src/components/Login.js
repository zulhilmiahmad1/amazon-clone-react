import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Firebase login setup here
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  // Firebase register setup here
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // If its succesfully created a new user with email and password it will redirect to homepage
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://scontent.fsyd3-1.fna.fbcdn.net/v/t1.0-9/131027598_204852821261777_442232424336275905_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=ZrJEGM7wPVIAX-JA-Tf&_nc_ht=scontent.fsyd3-1.fna&oh=b94e61949c0d6402b3af7b02cc65dfa3&oe=601B4337"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signinButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to AHMart's Condition of use & sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button
          className="login__registerButton"
          onClick={register}
          type="submit"
        >
          Create your AHMart account
        </button>
      </div>
    </div>
  );
}

export default Login;
