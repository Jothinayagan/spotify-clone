export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBiVFTZu8y2BJclx6w5HPMn4HXe_wUEfrZabUndzaEXcN7XdAzA0HEHOXdB2Q_I_6ZWDpUwxBIS1ihk_sxb2yxSkaCgQLax6S4wFwDLrpTUtThCqfagxCppoqUQtWoA0_g2JL-r7swOZIl4frm7QGLsQPXjbi8YX2rhRTXDsm3w3_nzQmJU",
};

export const reducer = (state, action) => {
    console.log("Action", action);

    switch (action) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};
