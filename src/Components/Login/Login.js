import React from "react";
import { LOGIN_URI, SPOTIFY_LOGO_URL } from "../../utils/api";
import "./Login.css";

function Login() {
    return (
        <div className="login">
            <img alt="spotify logo" src={SPOTIFY_LOGO_URL} />
            <a href={LOGIN_URI}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
