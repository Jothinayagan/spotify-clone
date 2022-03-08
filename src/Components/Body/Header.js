import React from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import { useSpotify } from "../../Context";

function Header({ spotify }) {
    const [{ user }, dispatch] = useSpotify();

    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input placeholder="Search for Artists, Songs, or Podcasts " type="text" />
            </div>
            <div className="header_right">
                <Avatar alt={user?.display_name} src={user?.images[0].url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;
