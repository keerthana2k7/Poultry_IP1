import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Farm() {
  const navigate = useNavigate();
  const [farms, setFarms] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const addFarm = () => {
    setFarms([...farms, { name, location }]);
    setName("");
    setLocation("");
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
          <button>🐔 Farm Management</button>
          <button onClick={() => navigate("/batch")}>📦 Batch Management</button>
          <button onClick={() => navigate("/feed")}>🌾 Feed & Expenses</button>
          <button onClick={() => navigate("/market")}>📈 Market Prices</button>
        </div>

        <div className="content">
          <h2>Farm Management</h2>

          <input
            placeholder="Farm Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={addFarm}>Add Farm</button>

          <table>
            <thead>
              <tr>
                <th>Farm Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {farms.map((f, i) => (
                <tr key={i}>
                  <td>{f.name}</td>
                  <td>{f.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Farm;
