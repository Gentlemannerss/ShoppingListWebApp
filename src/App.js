import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Load from localStorage on startup
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("shoppingList"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!newItem.trim()) return;

    setItems([...items, newItem.trim()]);
    setNewItem("");
  };

  const deleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
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
          <li key={index} className="list-item">
            <span>{item}</span>
            <button className="delete-btn" onClick={() => deleteItem(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;