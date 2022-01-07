import React from "react";
import { SPOTIFY_LOGO_URL } from "../../utils/api";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img src={SPOTIFY_LOGO_URL} />
      <a>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
