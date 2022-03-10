import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Header from "./Header";
import SongItem from "./SongItem";
import "./style.css";
import { setDiscoverWeeklyPlaylist } from "../../store/slice/spotify.slice";
import useSpotify from "../../hooks/useSpotify";

function Body() {
    const spotify = useSpotify();
    const [weekly, setWeekly] = useState(null);

    const dispatch = useDispatch();
    const playlistId = useSelector((state) => state.spotify.playlist) || process.env.REACT_APP_DISCOVER_WEEKLY_PLAYLIST;
    const spotifyReducer = useSelector((state) => state.spotify);

    useEffect(() => {
        console.log("token", spotify.getAccessToken(), "lol", spotifyReducer);
        spotify.getPlaylist(playlistId).then((playlist) => {
            console.log(`playlist ${playlist}`, playlist);
            dispatch(setDiscoverWeeklyPlaylist({ discover_weekly: playlist }));
        });
    }, [playlistId]);

    useEffect(() => {
        if (spotifyReducer.discover_weekly) {
            console.log();
            setWeekly(spotifyReducer.discover_weekly);
        }
    }, [spotifyReducer.discover_weekly]);

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={weekly?.images[0]?.url || ""} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{weekly?.name}</h2>
                    <p>{weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {weekly?.tracks.items.map(
                    (item) => !item.track.is_local && <SongItem track={item.track} key={item.track.id} />
                )}
            </div>
        </div>
    );
}

export default Body;
