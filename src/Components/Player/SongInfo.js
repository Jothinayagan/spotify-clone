import React from "react";
import "./Player.css";
// import heartIcon from "../../Assets/Icons/heart-64.png";
import heartIcon from "../../Assets/Icons/heart.svg";
const albumArtUri = `https://imgr.search.brave.com/oN8G1b7qZOtNx1sakSYeYPrMTlK6SeCtzShS6XeGYsM/fit/474/225/no/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/aVBJMjNNU2dZTjll/TTVDc0ZIODJ3SGFI/YSZwaWQ9QXBp`;

function SongInfo() {
    return (
        <div className="song-info">
            <img
                className="song-info-album-art"
                src={albumArtUri}
                alt="Album Art"
            />
            <div className="song-info-column-flex">
                {/* <marquee className="padding-top">Naan Un Azhaginilae (From "24")</marquee> */}
                {/* <p className="padding-top">Naan Un Azhaginilae (From "24")</p> */}
                {/* TODO: Marquee the text if song name is more than limited character.
                For eg. See above examples */}
                <p className="padding-top">Naan Un Azhaginilae</p>
                <p className="padding-bottom">Arijit Singh, Shreya Ghosal</p>
            </div>
            <div>
                <img src={heartIcon} alt="like" width="20" height="20" />
            </div>
        </div>
    );
}

export default SongInfo;
