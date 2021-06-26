import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main";
import Player from "./Components/Player";

function App() {
    return (
        <div className="App">
            <div>
                <SideBar />
            </div>
            <div>
              <NavBar />
              <Main />
              <Player />
            </div>
        </div>
    );
}

export default App;
