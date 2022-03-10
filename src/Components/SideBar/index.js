import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SidebarOptions from "./SidebarOption";
import "./style.css";
import useSpotify from "../../hooks/useSpotify";
import { isEmpty } from "lodash";
import { setPlaylists as setSpotifyPlaylists } from "../../store/slice/spotify.slice";

function Sidebar() {
    const spotify = useSpotify();
    const [playlists, setPlaylists] = useState([]);

    const dispatch = useDispatch();

    const spotifyReducer = useSelector((state) => state.spotify);

    useEffect(() => {
        spotify.getUserPlaylists().then((playlists) => dispatch(setSpotifyPlaylists({ playlists })));
    }, [spotify]);

    useEffect(() => {
        if (!isEmpty(spotifyReducer.playlists)) setPlaylists(spotifyReducer.playlists);
    }, [spotifyReducer.playlists]);

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src={process.env.REACT_APP_SPOTIFY_LOGO_URL} alt="spotify_logo" />
            <SidebarOptions Icon={HomeIcon} title={"Home"} />
            <SidebarOptions Icon={SearchIcon} title={"Search"} />
            <SidebarOptions Icon={LibraryMusicIcon} title={"Your Library"} />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOptions key={playlist.id} playlist={playlist.id} title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;
