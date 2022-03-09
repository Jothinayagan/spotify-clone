import { configureStore } from "@reduxjs/toolkit";
import { spotifySlice } from "./slice/spotify.slice";

export const store = configureStore({
    reducer: { spotify: spotifySlice.reducer },
});
