import { useEffect } from "react";
import { useSelector } from "react-redux";
import SpotifyAPI from "../utils/api";

function useSpotify() {
    const accessToken = SpotifyAPI.getAccessToken();
    const spotifyReducer = useSelector((state) => state.spotify);

    useEffect(() => {
        console.log("accessToken useSpotify", accessToken);
        if (!accessToken) {
            SpotifyAPI.setAccessToken(spotifyReducer.token);
            console.log("after ", SpotifyAPI.getAccessToken());
        }
    }, [spotifyReducer.token]);

    return SpotifyAPI;
}

export default useSpotify;
