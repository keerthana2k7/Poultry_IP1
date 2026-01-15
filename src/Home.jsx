import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const CountUp = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(value / 35);
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}</span>;
};

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="navbar">
        <div>
          <h2>Poultry Farm Management</h2>
          <small>Operational Dashboard</small>
        </div>
        <div className="nav-right">
          <span className="user-chip">
            {user?.email || "Farmer"}
          </span>
          <button onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
  <button onClick={() => navigate("/home")}>📊 Dashboard</button>
  <button onClick={() => navigate("/farm")}>🐔 Farm</button>
  <button onClick={() => navigate("/batch")}>📦 Batches</button>
  <button onClick={() => navigate("/feed")}>🌾 Feed</button>
  <button onClick={() => navigate("/health")}>💊 Health</button>
  <button onClick={() => navigate("/market")}>📈 Market</button>
  <button onClick={() => navigate("/reports")}>📑 Reports</button>
  <button onClick={() => navigate("/settings")}>⚙ Settings</button>
</aside>


        {/* Main Content */}
        <main className="content">

          {/* Welcome */}
          <section className="welcome-card">
            <h2>Good Morning 👋</h2>
            <p>
              Welcome back, <strong>{user?.email || "Farm Owner"}</strong>.  
              Here’s today’s operational summary.
            </p>
          </section>

          {/* Quick Actions */}
          <section className="quick-actions">
            <button>➕ New Batch</button>
            <button>💊 Add Medicine</button>
            <button>🌾 Record Feed</button>
            <button>📊 Generate Report</button>
          </section>

          {/* KPI Cards */}
          <section className="kpi-grid">
            <div className="kpi-card">
              <h4>Total Birds</h4>
              <p><CountUp value={1200} /></p>
              <span className="trend up">↑ 3%</span>
            </div>

            <div className="kpi-card">
              <h4>Expenses (₹)</h4>
              <p><CountUp value={85000} /></p>
              <span className="trend down">↓ 1%</span>
            </div>

            <div className="kpi-card">
              <h4>Mortality</h4>
              <p><CountUp value={25} /></p>
              <span className="trend up danger">↑ Alert</span>
            </div>

            <div className="kpi-card">
              <h4>Estimated Profit (₹)</h4>
              <p><CountUp value={35000} /></p>
              <span className="trend up">↑ 6%</span>
            </div>
          </section>

          {/* Health + Status */}
          <section className="status-grid">
            <div className="status-card good">
              <h3>Farm Health</h3>
              <p>Stable – No critical issues</p>
            </div>

            <div className="status-card warning">
              <h3>Feed Consumption</h3>
              <p>Slightly above normal</p>
            </div>

            <div className="status-card danger">
              <h3>Mortality Risk</h3>
              <p>Monitor closely this week</p>
            </div>
          </section>

          {/* Activity Log */}
          <section className="activity-log">
            <h3>Recent Activity</h3>
            <ul>
              <li>✔ Feed expense added – ₹5,000</li>
              <li>✔ New batch created – 300 birds</li>
              <li>⚠ Mortality recorded – 2 birds</li>
              <li>✔ Market prices updated</li>
            </ul>
          </section>

          {/* Insights */}
          <section className="insights">
            <h3>System Insights</h3>
            <ul>
              <li>📌 Buying feed in bulk can save up to 8%</li>
              <li>📌 Current market trend is favorable</li>
              <li>📌 Early mortality detection reduces losses</li>
            </ul>
          </section>
          <button onClick={() => navigate("/health")}>💊 Health Reports</button>
<button onClick={() => navigate("/settings")}>⚙ Settings</button>


        </main>
      </div>

      <footer>© 2026 Poultry Farm Management System</footer>
    </>
  );
};

export default Home;
