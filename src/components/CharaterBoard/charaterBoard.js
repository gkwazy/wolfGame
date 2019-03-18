import React from "react";
import CharaterBox from "../CharaterBox/index";
import "./charaterBoard.css"

const CharaterBoard = props => (
    <div className="card bg-dark text-white Box">
        <h1>
            {props.name}
        </h1>
    </div>
);

export default CharaterBoard;
