import {AiOutlineCloseCircle, AiOutlineDelete} from "react-icons/ai";
import {ListItem} from "./ListItem"

export const List = () => {
    return (
        <div className="list-container">
            <ListItem title={"pippo"} style={'blue'}/>
            <div className="list-item blue">
                <div className="list-item-title">
                    <AiOutlineCloseCircle
                        className="list-icon"
                        onClick={() => console.log("SET DONE")}
                    />
                    <span className="list-title">TODO ITEM</span>
                </div>
                <AiOutlineDelete
                    className="list-icon"
                    onClick={() => console.log("DELETE")}
                />
            </div>
        </div>
    );
};
