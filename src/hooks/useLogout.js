import { useDispatch } from "react-redux";
import { setUser, setPlaylist, setToken, setPlaylists, setDiscoverWeeklyPlaylist } from "../store/slice/spotify.slice";

// user: null,
// playlists: [],
// playlist: null,
// playing: false,
// item: null,
// token: null,
// discover_weekly: null,

function useLogout() {
    const dispatch = useDispatch();

    return () => {
        dispatch(setUser({ user: null }));
        dispatch(setPlaylist({ playlist: null }));
        dispatch(setToken({ token: null }));
        dispatch(setPlaylists({ playlists: [] }));
        dispatch(setDiscoverWeeklyPlaylist({ discover_weekly: null }));
    };
}

export default useLogout;
