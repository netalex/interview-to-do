import {AiOutlinePlusCircle} from "react-icons/ai";
import {useState} from "react";

/*
export const Inputs = (props) => {
  return (
    <div className="inputs-container">
        <form>
      <input type="text" placeholder="Add Todo" />

        </form>
      {/!*<button className="input-button" onClick={(event) => props.onGetTask(event)}>
        <AiOutlinePlusCircle />
        Add
      </button>*!/}
    </div>
  );
};*/



export const Inputs = (props) => {
    const [taskName, setTaskName] = useState('')

    const onChangeHandler = (event) => {
        console.log(event.target.value, "onChangeHandler()");
        setTaskName(event.target.value);
        console.log(taskName)
    }

    return (
        <div className="inputs-container">
            <form onSubmit={(event)=> props.onGetTask(event, taskName)}>
                <input id="taskName" type="text" onChange={onChangeHandler} placeholder="Add Todo"/>
                <button type="submit" className="input-button">
                    <AiOutlinePlusCircle/>
                    Add
                </button>
            </form>
        </div>
    );
};
