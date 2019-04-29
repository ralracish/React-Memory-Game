import React from "react";
import "./style.css";

function Header(props) {
    return (
        <header className="header">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="title"><span>Game of Thrones Clicky Game</span></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-5">
                    <h4 className="message"><span>{props.message}</span></h4>
                </div>
                <div className="col-md-4">
                    <h5 className="score"><span>Score: {props.score}</span></h5>
                </div>
            </div>
     
        </header>
    )
}
export default Header;


