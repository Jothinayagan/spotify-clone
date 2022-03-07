import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { isEmpty } from "lodash";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./utils/config";
import { useDataLayer } from "./Context";

// import SideBar from "./Components/SideBar/SideBar";
// import NavBar from "./Components/NavBar/NavBar";
// import Feed from "./Components/Feed/Feed";
// import Player from "./Components/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayer();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (!isEmpty(_token)) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>
        dispatch({
          type: "SET_USER",
          user,
        })
      );
    }
  }, []);

  return <div>{token ? <h2>You're logged in</h2> : <Login />}</div>;
}

export default App;
