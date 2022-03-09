import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles.css";
import App from "./App";
import { store } from "./store/index";
// import { SpotifyProvider } from "./Context";
// import { initialState, reducer } from "./Context/reducer";

ReactDOM.render(
    <React.StrictMode>
        {/* <SpotifyProvider initialState={initialState} reducer={reducer}> */}
        <Provider store={store}>
            <App />
        </Provider>
        {/* </SpotifyProvider> */}
    </React.StrictMode>,
    document.getElementById("root")
);
