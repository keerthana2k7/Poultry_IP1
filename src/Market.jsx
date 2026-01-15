import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Market = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");

  const marketData = [
    { market: "Karur", egg: 6.5, broiler: 180, status: "Good" },
    { market: "Trichy", egg: 6.2, broiler: 175, status: "Average" },
    { market: "Namakkal", egg: 6.7, broiler: 182, status: "High" }
  ];

  return (
    <>
      {/* Navbar – Same as Home */}
      <div className="navbar">
        <div>
          <h2>Poultry Farm Management</h2>
        </div>
        <div className="nav-right">
          <button onClick={() => navigate("/login")}>Logout</button>
        </div>
      </div>

      <div className="layout">
        {/* Sidebar – EXACT SAME AS HOME */}
        <aside className="sidebar">
          <button onClick={() => navigate("/home")}>📊 Dashboard</button>
          <button onClick={() => navigate("/farm")}>🐔 Farm</button>
          <button onClick={() => navigate("/batch")}>📦 Batches</button>
          <button onClick={() => navigate("/feed")}>🌾 Feed</button>
          <button onClick={() => navigate("/health")}>💊 Health</button>
          <button className="active">📈 Market</button>
          <button onClick={() => navigate("/reports")}>📑 Reports</button>
          <button onClick={() => navigate("/settings")}>⚙ Settings</button>
        </aside>

        {/* Main Content */}
        <main className="content">
          {/* Page Header */}
          <div className="card">
            <h2>Market Intelligence</h2>
            <p>
              Monitor live poultry market prices to optimize selling decisions
              and improve farm profitability.
            </p>
          </div>

          {/* Filters & Actions */}
          <div className="card" style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <strong>Filter:</strong>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ padding: "8px" }}
            >
              <option value="All">All Markets</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="High">High</option>
            </select>

            <div style={{ marginLeft: "auto" }}>
              <button style={{ marginRight: "10px" }}>🔄 Refresh</button>
              <button>📤 Export</button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="cards">
            <div className="card">
              <h3>Avg Egg Price (₹)</h3>
              <p>6.47</p>
              <small>Across markets</small>
            </div>

            <div className="card">
              <h3>Avg Broiler Price (₹/kg)</h3>
              <p>179</p>
              <small>Across markets</small>
            </div>

            <div className="card">
              <h3>Market Trend</h3>
              <p style={{ color: "#2e7d32" }}>↑ Stable</p>
              <small>Last 24 hours</small>
            </div>
          </div>

          {/* Market Table */}
          <div className="card" style={{ marginTop: "30px" }}>
            <h3>Today’s Market Prices</h3>

            <table>
              <thead>
                <tr>
                  <th>Market</th>
                  <th>Egg Price (₹)</th>
                  <th>Broiler Price (₹/kg)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {marketData
                  .filter(
                    (m) => filter === "All" || m.status === filter
                  )
                  .map((m, index) => (
                    <tr key={index}>
                      <td>{m.market}</td>
                      <td>{m.egg}</td>
                      <td>{m.broiler}</td>
                      <td>
                        <span
                          style={{
                            padding: "4px 10px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            color: "#fff",
                            background:
                              m.status === "Good"
                                ? "#2e7d32"
                                : m.status === "Average"
                                ? "#f9a825"
                                : "#c62828"
                          }}
                        >
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Insights */}
          <div className="info-box">
            <h3>📌 Market Insights</h3>
            <ul>
              <li>Karur market shows strong broiler demand</li>
              <li>Egg prices trending upward this weekend</li>
              <li>Consider delaying sales in low-price regions</li>
            </ul>
          </div>

          <p style={{ fontSize: "12px", opacity: 0.7 }}>
            Last updated: Today at 09:30 AM
          </p>
        </main>
      </div>

      <footer>© 2026 Poultry Farm Management System</footer>
    </>
  );
};

export default Market;
