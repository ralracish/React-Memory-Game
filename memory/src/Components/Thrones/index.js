import React from "react";
import "./style.css";

function Thrones(props) {
    return (
        <div className="jumbotron">
        <div className="img-container col-md-3" onClick={() => props.z(props.id)}>
            <img alt={props.x} src={props.y} height="150px" width="150px"/>
        </div>
        </div>
    );
}

export default Thrones;