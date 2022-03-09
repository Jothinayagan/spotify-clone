import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./utils/config";
import Player from "./Components/Player";
import { spotifySlice as actionSpotify } from "./store/slice/spotify.slice";

export const spotify = new SpotifyWebApi();

function App() {
    const dispatch = useDispatch();
    const spotifyReducer = useSelector((state) => state.spotify);
    const { setToken, setUser, setPlaylists, setDiscoverWeeklyPlaylist } = actionSpotify.actions;

    console.log("sp.slice", spotifyReducer);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (!isEmpty(_token)) {
            spotify.setAccessToken(_token);

            dispatch(setToken({ token: _token }));

            spotify.getMe().then((user) => dispatch(setUser({ user })));

            spotify.getUserPlaylists().then((playlists) => dispatch(setPlaylists({ playlists })));

            spotify.getPlaylist(process.env.REACT_APP_DISCOVER_WEEKLY_PLAYLIST).then((playlist) => {
                dispatch(setDiscoverWeeklyPlaylist({ discover_weekly: playlist }));
            });
        }
    });

    return <div>{spotifyReducer.token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
