import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineDelete
} from "react-icons/ai";

export const List = () => {
  return (
    <div className="list-container">
      <div className="list-item">
        <div className="list-item-title">
          <AiOutlineCheckCircle
            className="list-icon"
            onClick={() => console.log("SET NO DONE")}
          />
          <span className="list-title">TODO ITEM</span>
        </div>
        <AiOutlineDelete
          className="list-icon"
          onClick={() => console.log("DELETE")}
        />
      </div>
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
