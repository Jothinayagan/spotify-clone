import React from "react";
import "./Player.css";

function Player() {
    return (
        <div className="player-container">
            <div className="padding-left">
                <p>Song Info</p>
            </div>
            <div>
                <p>Player buttons</p>
            </div>
            <div className="padding-right">
                <p>Options</p>
            </div>
        </div>
    );
}

export default Player;
