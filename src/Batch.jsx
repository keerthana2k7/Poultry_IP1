import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Batch() {
  const navigate = useNavigate();
  const [batches, setBatches] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("Broiler");
  const [count, setCount] = useState("");

  const addBatch = () => {
    setBatches([...batches, { name, type, count }]);
    setName("");
    setCount("");
  };

  return (
    <>
      <div className="navbar">
        <h2>Poultry Farm Management System</h2>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>

      <div className="layout">
        <div className="sidebar">
          <button onClick={() => navigate("/")}>🏠 Home</button>
          <button onClick={() => navigate("/farm")}>🐔 Farm Management</button>
          <button>📦 Batch Management</button>
          <button onClick={() => navigate("/feed")}>🌾 Feed & Expenses</button>
          <button onClick={() => navigate("/market")}>📈 Market Prices</button>
        </div>

        <div className="content">
          <h2>Batch Management</h2>

          <input
            placeholder="Batch Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Broiler</option>
            <option>Layer</option>
          </select>
          <input
            placeholder="Bird Count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button onClick={addBatch}>Add Batch</button>

          <table>
            <thead>
              <tr>
                <th>Batch Name</th>
                <th>Type</th>
                <th>Bird Count</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((b, i) => (
                <tr key={i}>
                  <td>{b.name}</td>
                  <td>{b.type}</td>
                  <td>{b.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Batch;
