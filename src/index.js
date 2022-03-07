import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { SpotifyContext } from "./Context";
import { initialState, reducer } from "./Context/reducer";

ReactDOM.render(
    <React.StrictMode>
        <SpotifyContext initialState={initialState} reducer={reducer}>
            <App />
        </SpotifyContext>
    </React.StrictMode>,
    document.getElementById("root")
);
