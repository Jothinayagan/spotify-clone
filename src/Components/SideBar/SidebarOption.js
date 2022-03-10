import React from "react";
import { useDispatch } from "react-redux";
import { spotifySlice } from "../../store/slice/spotify.slice";
import "./style.css";

function SidebarOption({ title, Icon, playlist }) {
    const dispatch = useDispatch();

    const setPlaylistId = (id) => {
        dispatch(spotifySlice.actions.setPlaylist({ playlist: id }));
    };

    return (
        <div className="sidebar_option" onClick={() => setPlaylistId(playlist)}>
            {Icon && <Icon className="sidebar_icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default SidebarOption;
