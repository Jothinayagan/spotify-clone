import React from "react";
import SpotifyIcon from "../../Assets/Icons/logo.png";
import "./SideBar.css";

function SideBar() {
    return (
        <div className="sidebar-container">
            <div>
                <img
                    src={SpotifyIcon}
                    alt="Spotify Logo"
                    className="sidebar-img"
                />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
                    <li>Your Library</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Create Playlist</li>
                    <li>Like Songs</li>
                </ul>
            </div>
            <div>
                <h3>Playlist will be pops up here</h3>
            </div>
        </div>
    );
}

export default SideBar;
