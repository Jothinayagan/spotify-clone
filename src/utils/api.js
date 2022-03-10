import SpotifyWebApi from "spotify-web-api-js";

export const SPOTIFY_LOGO_URL = process.env.REACT_APP_SPOTIFY_LOGO_URL;
export const SPOTIFY_AUTH_URI = process.env.REACT_APP_SPOTIFY_AUTH_URI;
export const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

export const SPOTIFY_SCOPE = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
];

const SpotifyAPI = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

export default SpotifyAPI;

export const LOGIN_URI = `${SPOTIFY_AUTH_URI}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SPOTIFY_SCOPE.join(
    "%20"
)}&response_type=token&show_dialog=true`;
