import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { SpotifyProvider } from "./Context";
import { initialState, reducer } from "./Context/reducer";

ReactDOM.render(
    <React.StrictMode>
        <SpotifyProvider initialState={initialState} reducer={reducer}>
            <App />
        </SpotifyProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
