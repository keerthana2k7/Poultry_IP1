import React from "react";
import { useNavigate } from "react-router-dom";
import "./Health.css";

const Health = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h2>Health Reports</h2>
        <button onClick={() => navigate("/home")}>Back to Dashboard</button>
      </div>

      <div className="health-container">
        {/* Summary */}
        <div className="health-card good">
          <h3>Overall Health Status</h3>
          <p>🟢 Farm health is stable</p>
        </div>

        {/* Metrics */}
        <div className="health-grid">
          <div className="metric">
            <h4>Total Birds</h4>
            <p>1200</p>
          </div>

          <div className="metric">
            <h4>Mortality</h4>
            <p>25</p>
          </div>

          <div className="metric">
            <h4>Active Diseases</h4>
            <p>None</p>
          </div>

          <div className="metric">
            <h4>Vaccinated</h4>
            <p>95%</p>
          </div>
        </div>

        {/* Alerts */}
        <div className="alert-box warning">
          ⚠ Slight increase in mortality detected in last 3 days
        </div>

        {/* Health Log */}
        <div className="health-log">
          <h3>Recent Health Activity</h3>
          <ul>
            <li>✔ Vaccination completed for Batch A</li>
            <li>⚠ 2 birds mortality recorded</li>
            <li>✔ Vitamin supplements added</li>
          </ul>
        </div>

        {/* Suggestions */}
        <div className="health-card info">
          <h3>Veterinary Suggestions</h3>
          <ul>
            <li>Ensure clean drinking water</li>
            <li>Maintain proper ventilation</li>
            <li>Monitor birds daily</li>
          </ul>
        </div>
      </div>

      <footer>© 2026 Poultry Farm Management System</footer>
    </>
  );
};

export default Health;
