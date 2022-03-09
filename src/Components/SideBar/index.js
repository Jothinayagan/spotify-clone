import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SidebarOptions from "./SidebarOption";
import "./style.css";

function Sidebar() {
    const spotifyReducer = useSelector((state) => state.spotify);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        if (spotifyReducer.playlists) setPlaylists(spotifyReducer.playlists);
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
                <SidebarOptions key={playlist.id} title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;
