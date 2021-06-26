import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
    const [userButton, toggleUserButton] = useState(false);

    const handleUserButton = () => toggleUserButton(!userButton);

    return (
        <div className="nav-container">
            <div className="nav-align-icon-left">
                <button className="icon-button"></button>
                <div className="nav-space-between-icon"></div>
                <button className="icon-button"></button>
            </div>
            <div className="nav-align-icon-left">
                <button className="nav-button">UPGRADE</button>
                <div className="nav-space-between-icon"></div>
                <div className="nav-dropdown">
                    <button className="nav-button" onClick={handleUserButton}>
                        Jothinayagan
                    </button>
                    {userButton && (
                        <div className="nav-dropdown-content">
                            <ul>
                                <li>
                                    <a href="#">Account</a>
                                </li>
                                <li>
                                    <a href="#">Profile</a>
                                </li>
                                <li>
                                    <a href="#">Upgrade to Premium</a>
                                </li>
                                <li>
                                    <a href="#">Log out</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
