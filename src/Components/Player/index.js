import React from "react";
import Sidebar from "../SideBar";
import Body from "../Body";
import Footer from "../Footer";
import "./style.css";

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    );
}

export default Player;
