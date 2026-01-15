import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Health = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== NAVBAR (Same as Home) ===== */}
      <div className="navbar">
        <div>
          <h2>Poultry Farm Management</h2>
        </div>
        <div className="nav-right">
          <button onClick={() => navigate("/login")}>Logout</button>
        </div>
      </div>

      <div className="layout">
        {/* ===== SIDEBAR (Same as Home) ===== */}
        <aside className="sidebar">
          <button onClick={() => navigate("/home")}>📊 Dashboard</button>
          <button onClick={() => navigate("/farm")}>🐔 Farm</button>
          <button onClick={() => navigate("/batch")}>📦 Batches</button>
          <button onClick={() => navigate("/feed")}>🌾 Feed</button>
          <button className="active">💊 Health</button>
          <button onClick={() => navigate("/market")}>📈 Market</button>
          <button onClick={() => navigate("/reports")}>📑 Reports</button>
          <button onClick={() => navigate("/settings")}>⚙ Settings</button>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">
          {/* Page Header */}
          <section className="card">
            <h2>Health Monitoring & Risk Assessment</h2>
            <p>
              Track bird health indicators, detect risks early, and take
              preventive action to reduce mortality and production loss.
            </p>
          </section>

          {/* Overall Health Status */}
          <section className="card good">
            <h3>Overall Farm Health</h3>
            <p>
              🟢 <strong>Stable</strong> — No critical disease patterns detected.
              Routine monitoring recommended.
            </p>
          </section>

          {/* KPI METRICS */}
          <section className="cards">
            <div className="card">
              <h4>Total Birds</h4>
              <p>1,200</p>
              <small>Across all active batches</small>
            </div>

            <div className="card">
              <h4>Mortality Count</h4>
              <p>25</p>
              <small>Last 7 days</small>
            </div>

            <div className="card">
              <h4>Vaccination Coverage</h4>
              <p>95%</p>
              <small>Industry safe range</small>
            </div>

            <div className="card">
              <h4>Active Disease Cases</h4>
              <p>0</p>
              <small>No outbreak detected</small>
            </div>
          </section>

          {/* Risk & Alerts */}
          <section className="card warning">
            <h3>⚠ Health Risk Indicators</h3>
            <ul>
              <li>Mortality increased slightly over the last 3 days</li>
              <li>Temperature sensitivity observed in one batch</li>
              <li>Feed intake irregularities reported</li>
            </ul>
          </section>

          {/* Activity Log */}
          <section className="card">
            <h3>Recent Health Events</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12 Jan</td>
                  <td>Vaccination – Batch A</td>
                  <td style={{ color: "green" }}>Completed</td>
                </tr>
                <tr>
                  <td>11 Jan</td>
                  <td>Mortality Recorded (2 birds)</td>
                  <td style={{ color: "orange" }}>Attention</td>
                </tr>
                <tr>
                  <td>10 Jan</td>
                  <td>Vitamin Supplement Added</td>
                  <td style={{ color: "green" }}>Completed</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Recommendations */}
          <section className="card info">
            <h3>Veterinary & System Recommendations</h3>
            <ul>
              <li>Increase water availability during hot hours</li>
              <li>Ensure ventilation fans are operational</li>
              <li>Continue daily mortality tracking</li>
              <li>Schedule next vaccination audit</li>
            </ul>
          </section>

          {/* Action Panel */}
          <section className="card">
            <h3>Recommended Actions</h3>
            <div className="quick-actions">
              <button>➕ Add Health Record</button>
              <button>📊 View Batch-wise Health</button>
              <button>📄 Export Health Report</button>
            </div>
          </section>
        </main>
      </div>

      <footer>© 2026 Poultry Farm Management System</footer>
    </>
  );
};

export default Health;
