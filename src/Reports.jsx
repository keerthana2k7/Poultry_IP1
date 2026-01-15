import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Reports = () => {
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
          <button onClick={() => navigate("/health")}>💊 Health</button>
          <button onClick={() => navigate("/market")}>📈 Market</button>
          <button className="active">📑 Reports</button>
          <button onClick={() => navigate("/settings")}>⚙ Settings</button>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">
          {/* Header */}
          <section className="card">
            <h2>Reports & Analytics</h2>
            <p>
              Generate operational, financial, and health reports to evaluate
              farm performance and support management decisions.
            </p>
          </section>

          {/* Report Summary */}
          <section className="cards">
            <div className="card">
              <h3>Total Birds</h3>
              <p>1,200</p>
              <small>Current active stock</small>
            </div>

            <div className="card">
              <h3>Total Expenses (₹)</h3>
              <p>85,000</p>
              <small>Feed, medicine, labour</small>
            </div>

            <div className="card">
              <h3>Mortality</h3>
              <p>25</p>
              <small>Last 30 days</small>
            </div>

            <div className="card">
              <h3>Estimated Profit (₹)</h3>
              <p>35,000</p>
              <small>Based on market rates</small>
            </div>
          </section>

          {/* Filters */}
          <section className="card">
            <h3>Report Filters</h3>
            <div className="form-grid">
              <input type="date" />
              <input type="date" />
              <select>
                <option>All Farms</option>
                <option>Farm A</option>
                <option>Farm B</option>
              </select>
              <button>Generate Report</button>
            </div>
          </section>

          {/* Report Table */}
          <section className="card">
            <h3>Detailed Report</h3>

            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Amount (₹)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12 Jan</td>
                  <td>Feed</td>
                  <td>Starter feed purchase</td>
                  <td>12,000</td>
                  <td style={{ color: "green" }}>Approved</td>
                </tr>
                <tr>
                  <td>10 Jan</td>
                  <td>Health</td>
                  <td>Vaccination – Batch A</td>
                  <td>3,500</td>
                  <td style={{ color: "green" }}>Completed</td>
                </tr>
                <tr>
                  <td>08 Jan</td>
                  <td>Loss</td>
                  <td>Mortality (2 birds)</td>
                  <td>-1,200</td>
                  <td style={{ color: "orange" }}>Reviewed</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Export */}
          <section className="card">
            <h3>Export & Sharing</h3>
            <p>
              Download reports for record keeping, audits, or financial review.
            </p>
            <div className="quick-actions">
              <button>📄 Export PDF</button>
              <button>📊 Export Excel</button>
              <button>📧 Email Report</button>
            </div>
          </section>

          {/* Insights */}
          <section className="card info">
            <h3>📌 System Insights</h3>
            <ul>
              <li>Feed accounts for 68% of total expenses</li>
              <li>Mortality within acceptable industry limits</li>
              <li>Profit margin improved compared to last cycle</li>
            </ul>
          </section>
        </main>
      </div>

      <footer>© 2026 Poultry Farm Management System</footer>
    </>
  );
};

export default Reports;
