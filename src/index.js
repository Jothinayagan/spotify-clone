import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { DataLayer } from "./Context";
import { initialState, reducer } from "./Context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
