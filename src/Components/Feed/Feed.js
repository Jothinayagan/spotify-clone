import React from "react";
import "./Feed.scss";

const albumArt =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe59oO9HxwAMPyOJDF4-ecmae3SsTAOE7joA&usqp=CAU";

const albumList = [
    {
        albumArtUri: albumArt,
        name: "Starboy",
        artist: "The Weeknd",
    },
    {
        albumArtUri: albumArt,
        name: "Pray for me",
        artist: "The Weeknd",
    },
    {
        albumArtUri: albumArt,
        name: "Blinding Lights",
        artist: "The Weeknd",
    },
    {
        albumArtUri: albumArt,
        name: "Memories",
        artist: "Maroon5",
    },
    {
        albumArtUri: albumArt,
        name: "Smack That",
        artist: "Eminem",
    },
];

function Feed() {
    return (
        <div className="display-scroll">
            <div className="padding-left">
                <h2>Made for you</h2>
                <div className="display">
                    <p className="info">
                        Get better recommendations the more you listen.
                    </p>
                    <button className="button">SEE ALL</button>
                </div>
                <div className="box-card">
                    {albumList &&
                        albumList.map((item) => (
                            <div className="card">
                                <div className="display-image">
                                    <img
                                        className="img-padding"
                                        src={item.albumArtUri}
                                        alt="Album Art"
                                        width="180"
                                        height="180"
                                    />
                                </div>
                                <p className="song-name">{item.name}</p>
                                <p className="artist-name">{item.artist}</p>
                            </div>
                        ))}
                </div>
            </div>

            <div className="padding-left">
                <h2>Made for you</h2>
                <div className="display">
                    <p className="info">
                        Get better recommendations the more you listen.
                    </p>
                    <button className="button">SEE ALL</button>
                </div>
                <div className="box-card">
                    {albumList &&
                        albumList.map((item) => (
                            <div className="card">
                                <div className="display-image">
                                    <img
                                        className="img-padding"
                                        src={item.albumArtUri}
                                        alt="Album Art"
                                        width="180"
                                        height="180"
                                    />
                                </div>
                                <p className="song-name">{item.name}</p>
                                <p className="artist-name">{item.artist}</p>
                            </div>
                        ))}
                </div>
            </div>

            <div className="padding-left">
                <h2>Made for you</h2>
                <div className="display">
                    <p className="info">
                        Get better recommendations the more you listen.
                    </p>
                    <button className="button">SEE ALL</button>
                </div>
                <div className="box-card">
                    {albumList &&
                        albumList.map((item) => (
                            <div className="card">
                                <div className="display-image">
                                    <img
                                        className="img-padding"
                                        src={item.albumArtUri}
                                        alt="Album Art"
                                        width="180"
                                        height="180"
                                    />
                                </div>
                                <p className="song-name">{item.name}</p>
                                <p className="artist-name">{item.artist}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Feed;
