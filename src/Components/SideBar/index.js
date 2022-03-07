import React from "react";
import SidebarOptions from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useSpotify } from "../../Context";
import "./style.css";

function Sidebar() {
    const [{ playlists }, dispatch] = useSpotify();

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
