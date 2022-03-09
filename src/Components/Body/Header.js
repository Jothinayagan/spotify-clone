import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

function Header({ spotify }) {
    const spotifyReducer = useSelector((state) => state.spotify);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (spotifyReducer.user) setUser(spotifyReducer.user);
    }, [spotifyReducer.user]);

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
