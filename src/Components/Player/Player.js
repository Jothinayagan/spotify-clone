import React from "react";
import Options from "./Options";
import "./Player.css";
import PlayerButtons from "./PlayerButtons";
import SongInfo from "./SongInfo";

function Player() {
    return (
        <div className="player-container">
            <div className="padding-left">
                <SongInfo />
            </div>
            <div>
                <PlayerButtons />
            </div>
            <div className="padding-right">
                <Options />
            </div>
        </div>
    );
}

export default Player;
