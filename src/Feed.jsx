import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Feed() {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [feed, setFeed] = useState("");
  const [cost, setCost] = useState("");

  const addRecord = () => {
    setRecords([...records, { feed, cost }]);
    setFeed("");
    setCost("");
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
          <button onClick={() => navigate("/batch")}>📦 Batch Management</button>
          <button>🌾 Feed & Expenses</button>
          <button onClick={() => navigate("/market")}>📈 Market Prices</button>
        </div>

        <div className="content">
          <h2>Feed & Expense Management</h2>

          <input
            placeholder="Feed Type"
            value={feed}
            onChange={(e) => setFeed(e.target.value)}
          />
          <input
            placeholder="Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <button onClick={addRecord}>Add</button>

          <table>
            <thead>
              <tr>
                <th>Feed Type</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{r.feed}</td>
                  <td>{r.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Feed;
