import React from "react";
// import "./style.css";

function Thrones(props) {
    return (
        <div className="jumbotron">
            <div className="img-container">
                <div class="row">
                <img alt={props.name} src={props.image} />
            </div>
           
            <span onClick={() => props.shuffleArray(props.id)} className="shuffle"></span>
            </div>
        </div>
    );
}

export default Thrones;