import React, { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") return;

    setItems([...items, newItem.trim()]);
    setNewItem("");
  };

  return (
    <div className="app">
      <h1>🛒 Grocery List</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Add grocery item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
        />
        <button onClick={addItem}>Add</button>
      </div>

      <ul className="list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;