import {ListItem} from "./ListItem"

export const List = (props) => {
    console.log(props.dta);
    return (
        props.dta.map((d, idx) => <ListItem key={d.id} title={d.title} style={(idx % 2 != 0) && 'blue'} done={false}/>)
    );
};
