export const SPOTIFY_LOGO_URL =
  "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg";
export const SPOTIFY_AUTH_URI = "https://accounts.spotify.com/authorize";
export const SPOTIFY_CLIENT_ID = "011f9c47ceb342929fefd4cae8cc7179";
export const REDIRECT_URI = "http://localhost:3000/";

export const SPOTIFY_SCOPE = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const LOGIN_URI = `${SPOTIFY_AUTH_URI}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SPOTIFY_SCOPE.join(
  "%20"
)}&response_type=token&show_dialog=true`;
