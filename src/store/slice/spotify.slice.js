import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice({
    name: "spotify",
    initialState: {
        user: null,
        playlists: [],
        playlist: null,
        playing: false,
        item: null,
        token: null,
        discover_weekly: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        setPlaylists: (state, action) => {
            state.playlists = action.payload.playlists;
        },
        setPlaying: (state, action) => {
            state.playing = action.playing;
        },
        setitem: (state, action) => {
            state.item = action.item;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        setDiscoverWeeklyPlaylist: (state, action) => {
            state.discover_weekly = action.payload.discover_weekly;
        },
        setPlaylist: (state, action) => {
            state.playlist = action.payload.playlist;
        },
    },
});

export const { setUser, setToken, setDiscoverWeeklyPlaylist, setPlaying, setPlaylist, setPlaylists, setitem } =
    spotifySlice.actions;
export default spotifySlice.reducer;
