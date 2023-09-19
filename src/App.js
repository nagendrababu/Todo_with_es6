import "./styles.css";
import { useState } from "react";
export default function App() {
  const [inpValue, setInpValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const handleClick = () => {
    setTodoItems([...todoItems, { description: inpValue, isCompleted: false }]);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setInpValue(event.target.value);
          }}
        />
        <button style={{ marginLeft: "10px" }} onClick={handleClick}>
          Add
        </button>
      </div>
      <div>
        {todoItems?.map((val, index) => (
          <div key={index} style={{ margin: "10px" }}>
            {val?.isCompleted ? (
              <del>{val?.description}</del>
            ) : (
              <span>{val?.description}</span>
            )}
            <button
              style={{ marginLeft: "10px" }}
              disabled={val?.isCompleted}
              onClick={() => {
                const items = [...todoItems];
                let item = items[index];
                item.isCompleted = true;
                items[index] = item;
                setTodoItems(items);
              }}
            >
              Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
