import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const [email] = useState("farmer@gmail.com");

  return (
    <>
      <div className="navbar">
        <h2>Settings</h2>
        <button onClick={() => navigate("/home")}>Back to Dashboard</button>
      </div>

      <div className="settings-container">

        {/* Profile */}
        <div className="settings-card">
          <h3>Profile Information</h3>
          <p><strong>Email:</strong> {email}</p>
          <button>Edit Profile</button>
        </div>

        {/* Preferences */}
        <div className="settings-card">
          <h3>Preferences</h3>
          <label>
            <input type="checkbox" /> Enable Notifications
          </label>
          <br />
          <label>
            <input type="checkbox" /> Dark Mode (Coming Soon)
          </label>
        </div>

        {/* Security */}
        <div className="settings-card">
          <h3>Security</h3>
          <button>Change Password</button>
          <button className="danger">Logout from All Devices</button>
        </div>

        {/* System */}
        <div className="settings-card info">
          <h3>System Information</h3>
          <p>Version: 1.0.0</p>
          <p>Last Update: Jan 2026</p>
        </div>
      </div>

      <footer>© 2026 Poultry Farm Management System</footer>
    </>
  );
};

export default Settings;
