import { AiOutlinePlusCircle } from "react-icons/ai";

export const Inputs = () => {
  return (
    <div className="inputs-container">
      <input type="text" placeholder="Add Todo" />
      <button className="input-button" onClick={() => console.log("ADD TODO")}>
        <AiOutlinePlusCircle />
        Add
      </button>
    </div>
  );
};
