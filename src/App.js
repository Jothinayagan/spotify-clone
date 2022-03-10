import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./utils/config";
import Player from "./Components/Player";
import { setToken, setUser } from "./store/slice/spotify.slice";
import useSpotify from "./hooks/useSpotify";

function App() {
    const spotify = useSpotify();
    const dispatch = useDispatch();
    const spotifyReducer = useSelector((state) => state.spotify);

    console.log("sp.slice", spotifyReducer);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (!isEmpty(_token)) {
            dispatch(setToken({ token: _token }));
            spotify.setAccessToken(_token);
            spotify.getMe().then((user) => dispatch(setUser({ user })));
        }
    });

    return <div>{spotifyReducer.token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
