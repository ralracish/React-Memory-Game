import React from "react";
import "../style.css";

function Header() {
    return (
        <header className="header">
            <h1>Click an image to begin!</h1>
            <h1>You guessed correctly!</h1>
            <h1>You guessed incorrectly!</h1>
            Score 0: | Top Score: 
        </header>
    );
}

export default Header;


