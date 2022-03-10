import React from "react";
import "./style.css";

function SongItem({ track }) {
    // console.log(track);

    // const playSong = (uri) => {
    //     spotify.play({
    //         uris: [uri],
    //     });
    // };

    // add onClick={() => playSong(track?.uri)} to play the song

    // <div
    //     className="grid grid-cols-2 text-[#929292] hover:text-white hover:bg-[#2b2d30] rounded-md mt-5 cursor-pointer"
    //     onClick={playSong}
    // ></div>;

    return (
        <div className="songitem_header">
            <div className="songitem">
                <img className="songitem_album" src={track?.album?.images[0]?.url || ""} alt="" />
                <div className="songitem_info">
                    <h1>{track?.name}</h1>
                    <p>
                        {track?.artists?.map((artist) => artist?.name).join(", ")} - {track?.album?.name}
                    </p>
                </div>
            </div>
            <div className="demo">
                <h1>Demo</h1>
            </div>
        </div>
    );
}

export default SongItem;
