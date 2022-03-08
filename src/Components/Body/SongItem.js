import React from "react";
import "./style.css";

function SongItem({ track, playSong }) {
    console.log(track);
    return (
        <div className="songitem" onClick={() => playSong(track.id)}>
            <img className="songitem_album" src={track.album.images[0].url} alt="" />
            <div className="songitem_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} - {track.album.name}
                </p>
            </div>
        </div>
    );
}

export default SongItem;
