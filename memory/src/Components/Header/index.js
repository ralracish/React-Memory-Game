import React from "react";
import "./style.css";

function Header(props) {
    return (
        <header className="header">
            <h1>Game of Thrones Clicky Game</h1>
            <span>{props.message}</span>
            <span>Score: {props.score}</span>
            <span>Top Score: {props.topScore}</span> 
        </header>
    );
}
export default Header;


