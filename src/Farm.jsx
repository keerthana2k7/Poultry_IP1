import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Farm = () => {
  const navigate = useNavigate();

  const [farms, setFarms] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addFarm = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.location) {
      alert("Please fill all fields");
      return;
    }

    setFarms([...farms, formData]);

    setFormData({
      name: "",
      location: ""
    });
  };

  return (
    <>
      {/* Navbar – same as Home */}
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
          <button className="active">🐔 Farm</button>
          <button onClick={() => navigate("/batch")}>📦 Batches</button>
          <button onClick={() => navigate("/feed")}>🌾 Feed</button>
          <button onClick={() => navigate("/health")}>💊 Health</button>
          <button onClick={() => navigate("/market")}>📈 Market</button>
          <button onClick={() => navigate("/reports")}>📑 Reports</button>
          <button onClick={() => navigate("/settings")}>⚙ Settings</button>
        </aside>

        {/* Main Content */}
        <main className="content">
          <h2>Farm Management</h2>
          <p>
            Manage poultry farms, locations, and ownership details. This
            information is used across batches, health, and production reports.
          </p>

          {/* Add Farm Form */}
          <div className="card">
            <h3>Add New Farm</h3>

            <form className="form-grid" onSubmit={addFarm}>
              <input
                type="text"
                name="name"
                placeholder="Farm Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
              />

              <button type="submit">Add Farm</button>
            </form>
          </div>

          {/* Farm List */}
          <div className="card">
            <h3>Registered Farms</h3>

            {farms.length === 0 ? (
              <p style={{ opacity: 0.7 }}>
                No farms added yet. Add a farm to begin management.
              </p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Farm Name</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {farms.map((farm, index) => (
                    <tr key={index}>
                      <td>{farm.name}</td>
                      <td>{farm.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>

      <footer>© 2026 Poultry Farm Management System</footer>
    </>
  );
};

export default Farm;
