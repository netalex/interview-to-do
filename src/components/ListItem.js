import React, {useState} from "react";
import {AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDelete} from "react-icons/ai";


export const ListItem = (props) => {
    const [done, setDone] = useState(props.done)
    return (
        <div className={`list-item ${props.style}`}>
            <div className="list-item-title">
                {done ?
                    <AiOutlineCheckCircle
                        className="list-icon"
                        onClick={() => setDone(false)}
                    /> :
                    <AiOutlineCloseCircle
                        className="list-icon"
                        onClick={() => setDone(true)}
                    />
                }
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

