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
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Search</a>
                    </li>
                    <li>
                        <a href="#">Your Library</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Create Playlist</a>
                    </li>
                    <li>
                        <a href="#">Like Songs</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Playlist will be pops up here</h3>
            </div>
        </div>
    );
}

export default SideBar;
