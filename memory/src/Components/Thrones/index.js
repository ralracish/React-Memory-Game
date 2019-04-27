import React from "react";
// import "./style.css";

function Thrones(props) {
    return (
        <div className="jumbotron">
            <div className="img-container">
                <img alt={props.name} src={props.thrones} />
            </div>
           
            <span onClick={() => props.shuffleArray(props.id)} className="shuffle"></span>
        </div>
    );
}

export default Thrones;