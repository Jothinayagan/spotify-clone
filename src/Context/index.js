import React, { createContext, useReducer, useContext } from "react";

export const SpotifyContext = createContext();

export const SpotifyProvider = ({ initialState, reducer, children }) => (
    <SpotifyContext.Provider value={useReducer(reducer, initialState)}>{children}</SpotifyContext.Provider>
);

export const useSpotify = () => useContext(SpotifyContext);
