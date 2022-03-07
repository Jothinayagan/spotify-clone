import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { isEmpty } from "lodash";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./utils/config";
import { useSpotify } from "./Context";
import Player from "./Components/Player";

const spotify = new SpotifyWebApi();

function App() {
    const [{ token }, dispatch] = useSpotify();

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

            spotify.getPlaylist().then((playlists) =>
                dispatch({
                    type: "SET_PLAYLIST",
                    playlists,
                })
            );
        }
    });
    console.log(`${token}`);

    return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
