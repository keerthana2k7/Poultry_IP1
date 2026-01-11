import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h2>Poultry Farm Management System</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <div className="layout">

        {/* Sidebar */}
        <div className="sidebar">
          <button onClick={() => navigate("/home")}>🏠 Home</button>
          <button onClick={() => navigate("/farm")}>🐔 Farm Management</button>
          <button onClick={() => navigate("/batch")}>📦 Batch Management</button>
          <button onClick={() => navigate("/feed")}>🌾 Feed & Expenses</button>
          <button onClick={() => navigate("/market")}>📈 Market Prices</button>
        </div>

        {/* Main Content */}
        <div className="content">

          <h2>Welcome, Farmer 👋</h2>
          <p>
            This system helps poultry farm owners manage daily farm operations,
            monitor expenses, track bird health, and view current poultry market
            prices to improve profitability and reduce losses.
          </p>

          {/* Dashboard Cards */}
          <h3>Farm Overview</h3>
          <div className="cards">
            <div className="card">
              <h3>Total Birds</h3>
              <p>1200</p>
              <small>Current active birds</small>
            </div>

            <div className="card">
              <h3>Total Expenses</h3>
              <p>₹ 85,000</p>
              <small>Feed, medicine & labour</small>
            </div>

            <div className="card">
              <h3>Mortality</h3>
              <p>25</p>
              <small>Health indicator</small>
            </div>

            <div className="card">
              <h3>Estimated Profit</h3>
              <p>₹ 35,000</p>
              <small>Based on market price</small>
            </div>
          </div>

          {/* Alerts */}
          <div className="info-box">
            <h3>⚠ Alerts & Notifications</h3>
            <ul>
              <li>Feed cost increased compared to last week</li>
              <li>Mortality observed in last 3 days</li>
              <li>Market prices are favorable today</li>
            </ul>
          </div>

          {/* Market Prices */}
          <h3>Today's Market Prices</h3>
          <table>
            <thead>
              <tr>
                <th>Market</th>
                <th>Egg (₹/unit)</th>
                <th>Broiler (₹/kg)</th>
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

          {/* Benefits */}
          <div className="info-box">
            <h3>📌 System Benefits</h3>
            <ul>
              <li>Digital record keeping instead of manual notebooks</li>
              <li>Better cost and profit analysis</li>
              <li>Improved decision-making using market prices</li>
              <li>Reduced losses through data tracking</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer>
        © 2026 Poultry Farm Management System
      </footer>
    </>
  );
};

export default Home;
