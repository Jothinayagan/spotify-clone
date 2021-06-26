import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main";
import Player from "./Components/Player";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
            }}>
            <div>
                <SideBar />
            </div>
            <div
                style={{
                    width: "84vw",
                    height: "100vh",
                    backgroundColor: "#212121",
                    color: "white",
                }}>
                <NavBar />
                <Main />
                <Player />
            </div>
        </div>
    );
}

export default App;
