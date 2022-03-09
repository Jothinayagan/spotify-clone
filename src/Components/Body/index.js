import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Header from "./Header";
import SongItem from "./SongItem";
import "./style.css";

function Body({ spotify }) {
    const spotifyReducer = useSelector((state) => state.spotify);
    const [weekly, setWeekly] = useState(null);

    useEffect(() => {
        if (spotifyReducer.discover_weekly) setWeekly(spotifyReducer.discover_weekly);
    }, [spotifyReducer.discover_weekly]);

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {weekly?.tracks.items.map((item) => (
                    <SongItem track={item.track} key={item.track.id} />
                ))}
            </div>
        </div>
    );
}

export default Body;
