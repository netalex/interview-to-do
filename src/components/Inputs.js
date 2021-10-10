import {AiOutlinePlusCircle} from "react-icons/ai";
import {useState} from "react";

export const Inputs = (props) => {
    const [taskName, setTaskName] = useState('')

    const onChangeTakNameHandler = (event) => {
        console.log(event.target.value, "onChangeTakNameHandler()");
        setTaskName(event.target.value);
        console.log(taskName)
    }

    return (
        <div className="inputs-container">
            <form onSubmit={(event)=> props.onGetTask(event, taskName)}>
                <input id="taskName" type="text" onChange={onChangeTakNameHandler} placeholder="Add Todo"/>
                <button type="submit" className="input-button">
                    <AiOutlinePlusCircle/>
                    Add
                </button>
            </form>
        </div>
    );
};
