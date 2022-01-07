import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import Feed from "./Components/Feed/Feed";
import Player from "./Components/Player/Player";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "row",
    //   }}
    >
      {/* <div>
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
                <Feed />
            </div>
            <Player /> */}
      <Login />
    </div>
  );
}

export default App;
