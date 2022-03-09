import React from "react";
import { spotify } from "../../App";
import "./style.css";

function SongItem({ track }) {
    console.log(track);

    const playSong = (uri) => {
        spotify.play({
            uris: [uri],
        });
    };

    return (
        <div className="songitem" onClick={() => playSong(track.uri)}>
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
