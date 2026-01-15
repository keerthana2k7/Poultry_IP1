import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Batch = () => {
  const navigate = useNavigate();

  const [batches, setBatches] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    type: "Broiler",
    count: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addBatch = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.count) {
      alert("Please fill all fields");
      return;
    }

    setBatches([...batches, formData]);

    setFormData({
      name: "",
      type: "Broiler",
      count: ""
    });
  };

  return (
    <>
      {/* Navbar (same as Home) */}
      <div className="navbar">
        <div>
          <h2>Poultry Farm Management</h2>
        </div>
        <div className="nav-right">
          <button onClick={() => navigate("/login")}>Logout</button>
        </div>
      </div>

      <div className="layout">
        {/* Sidebar (EXACT SAME AS HOME) */}
        <aside className="sidebar">
          <button onClick={() => navigate("/home")}>📊 Dashboard</button>
          <button onClick={() => navigate("/farm")}>🐔 Farm</button>
          <button className="active">📦 Batches</button>
          <button onClick={() => navigate("/feed")}>🌾 Feed</button>
          <button onClick={() => navigate("/health")}>💊 Health</button>
          <button onClick={() => navigate("/market")}>📈 Market</button>
          <button onClick={() => navigate("/reports")}>📑 Reports</button>
          <button onClick={() => navigate("/settings")}>⚙ Settings</button>
        </aside>

        {/* Main Content */}
        <main className="content">
          <h2>Batch Management</h2>
          <p>
            Create and manage poultry batches. This helps track bird count,
            production cycles, and batch-wise performance.
          </p>

          {/* Add Batch */}
          <div className="card">
            <h3>Add New Batch</h3>

            <form className="form-grid" onSubmit={addBatch}>
              <input
                type="text"
                name="name"
                placeholder="Batch Name"
                value={formData.name}
                onChange={handleChange}
              />

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Broiler">Broiler</option>
                <option value="Layer">Layer</option>
              </select>

              <input
                type="number"
                name="count"
                placeholder="Bird Count"
                value={formData.count}
                onChange={handleChange}
              />

              <button type="submit">Add Batch</button>
            </form>
          </div>

          {/* Batch Table */}
          <div className="card">
            <h3>Existing Batches</h3>

            {batches.length === 0 ? (
              <p style={{ opacity: 0.7 }}>
                No batches available. Add a new batch to get started.
              </p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Batch Name</th>
                    <th>Type</th>
                    <th>Bird Count</th>
                  </tr>
                </thead>
                <tbody>
                  {batches.map((batch, index) => (
                    <tr key={index}>
                      <td>{batch.name}</td>
                      <td>{batch.type}</td>
                      <td>{batch.count}</td>
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

export default Batch;
