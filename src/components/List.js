import {ListItem} from "./ListItem"

export const List = () => {
    return (
        <div className="list-container">
            <ListItem title={"pippo"} style={''} done={true}/>
            <ListItem title={"pippo2"} style={'blue'} done={false}/>
        </div>
    );
};
