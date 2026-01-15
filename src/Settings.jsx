import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Settings = () => {
  const navigate = useNavigate();
  const [email] = useState("farmer@gmail.com");

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
          <button onClick={() => navigate("/reports")}>📑 Reports</button>
          <button className="active">⚙ Settings</button>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">
          <h2>System Settings</h2>
          <p>
            Manage your profile, application preferences, security options,
            and system configuration.
          </p>

          {/* SETTINGS GRID */}
          <div className="settings-container">

            {/* Profile */}
            <div className="settings-card">
              <h3>Profile Information</h3>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <small>This email is used for login and notifications.</small>
              <br />
              <button>Edit Profile</button>
            </div>

            {/* Preferences */}
            <div className="settings-card">
              <h3>Preferences</h3>
              <label>
                <input type="checkbox" /> Enable email notifications
              </label>
              <br />
              <label>
                <input type="checkbox" disabled /> Dark mode (coming soon)
              </label>
            </div>

            {/* Security */}
            <div className="settings-card">
              <h3>Security</h3>
              <p>Manage authentication and account safety.</p>
              <button>Change Password</button>
              <button className="danger">
                Logout from All Devices
              </button>
            </div>

            {/* System Info */}
            <div className="settings-card info">
              <h3>System Information</h3>
              <p><strong>Version:</strong> 1.0.0</p>
              <p><strong>Last Update:</strong> January 2026</p>
              <p><strong>Environment:</strong> Production</p>
            </div>
          </div>
        </main>
      </div>

      <footer>© 2026 Poultry Farm Management System</footer>
    </>
  );
};

export default Settings;
