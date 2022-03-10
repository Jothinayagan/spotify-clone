import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import useLogout from "../../hooks/useLogout";

function Header({ spotify }) {
    const spotifyReducer = useSelector((state) => state.spotify);
    const [user, setUser] = useState(null);
    const logout = useLogout();

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

                <Button variant="outlined" onClick={() => logout()}>
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default Header;
