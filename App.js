import { useState } from "react";
import List from "./list";
import "./styles.css";

export default function App() {
  const [item, setitem] = useState([]);
  const [value, setvalue] = useState();

  function store() {
    const inputValue = event.target.value;
    setvalue(inputValue);
  }

  function addtolist() {
    setitem((prevValue) => {
      return [...prevValue, value];
    });
  }

  function check(id) {
    setitem((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input type="text" name="enter items" value={value} onChange={store} />
      <button onClick={addtolist}>Add</button>

      <div>
        <ul>
          {item.map((items, index) => {
            return (
              <List lochecked={check} id={index} key={index} value={items} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
