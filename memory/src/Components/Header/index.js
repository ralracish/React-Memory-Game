import React from "react";
import "./style.css";

function Header(props) {
    return (
        <header className="header">
            <div className="row">
                <div className="col-md-3">
                    <h1 className="title"><span>Game of Thrones Clicky Game</span></h1>
                </div>
                <div className="col-md-3">
                    <h4 className="message"><span>{props.message}</span></h4>
                </div>
                <div className="col-md-3">
                    <h5 className="score"><span>Score: {props.score}</span></h5>
                    <h5 className="top-score"><span>Top Score: {props.topScore}</span></h5>
                </div>
            </div>    
        </header>
    )
}
export default Header;


