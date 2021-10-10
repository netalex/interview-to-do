import React from "react";
import {AiOutlineCheckCircle, AiOutlineDelete} from "react-icons/ai";

 export const ListItem = (props) => {
    return (
        <div className={`list-item ${props.style}`}>
            <div className="list-item-title">
                <AiOutlineCheckCircle
                    className="list-icon"
                    onClick={() => console.log("SET NO DONE")}
                />
                <span className="list-title">{props.title}</span>
            </div>
            <AiOutlineDelete
                className="list-icon"
                onClick={() => {
                    console.log("DELETE")
                }}
            />
        </div>
    );
};

