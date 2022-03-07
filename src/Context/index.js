import React, { createContext, useReducer, useContext } from "react";

export const CreateSpotifyContext = createContext();

export const SpotifyContext = ({ initialState, reducer, children }) => (
    <CreateSpotifyContext.Provider value={useReducer(reducer, initialState)}>{children}</CreateSpotifyContext.Provider>
);

export const useSpotify = () => useContext(CreateSpotifyContext);
