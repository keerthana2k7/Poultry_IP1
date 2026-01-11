import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Market() {
  const navigate = useNavigate();

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
          <button onClick={() => navigate("/feed")}>🌾 Feed & Expenses</button>
          <button>📈 Market Prices</button>
        </div>

        <div className="content">
          <h2>Market Prices</h2>

          <table>
            <thead>
              <tr>
                <th>Market</th>
                <th>Egg Price (₹)</th>
                <th>Broiler Price (₹/kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Karur</td>
                <td>6.50</td>
                <td>180</td>
              </tr>
              <tr>
                <td>Trichy</td>
                <td>6.20</td>
                <td>175</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Market;
