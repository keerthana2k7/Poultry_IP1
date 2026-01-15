import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Feed = () => {
  const navigate = useNavigate();

  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    feedType: "",
    cost: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addRecord = (e) => {
    e.preventDefault();

    if (!formData.feedType || !formData.cost) {
      alert("Please fill all fields");
      return;
    }

    setRecords([...records, formData]);

    setFormData({
      feedType: "",
      cost: ""
    });
  };

  const totalExpense = records.reduce(
    (sum, r) => sum + Number(r.cost || 0),
    0
  );

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
          <button onClick={() => navigate("/farm")}>🐔 Farm</button>
          <button onClick={() => navigate("/batch")}>📦 Batches</button>
          <button className="active">🌾 Feed</button>
          <button onClick={() => navigate("/health")}>💊 Health</button>
          <button onClick={() => navigate("/market")}>📈 Market</button>
          <button onClick={() => navigate("/reports")}>📑 Reports</button>
          <button onClick={() => navigate("/settings")}>⚙ Settings</button>
        </aside>

        {/* Main Content */}
        <main className="content">
          <h2>Feed & Expense Management</h2>
          <p>
            Track feed consumption and expenses to control operational costs
            effectively.
          </p>

          {/* Summary */}
          <div className="cards">
            <div className="card">
              <h3>Total Feed Entries</h3>
              <p>{records.length}</p>
            </div>
            <div className="card">
              <h3>Total Expense (₹)</h3>
              <p>{totalExpense}</p>
            </div>
          </div>

          {/* Add Feed Record */}
          <div className="card">
            <h3>Add Feed Expense</h3>

            <form className="form-grid" onSubmit={addRecord}>
              <input
                type="text"
                name="feedType"
                placeholder="Feed Type (Starter/Grower)"
                value={formData.feedType}
                onChange={handleChange}
              />

              <input
                type="number"
                name="cost"
                placeholder="Cost (₹)"
                value={formData.cost}
                onChange={handleChange}
              />

              <button type="submit">Add Record</button>
            </form>
          </div>

          {/* Records Table */}
          <div className="card">
            <h3>Feed Expense Records</h3>

            {records.length === 0 ? (
              <p style={{ opacity: 0.7 }}>
                No feed records available. Add a record to get started.
              </p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Feed Type</th>
                    <th>Cost (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((r, index) => (
                    <tr key={index}>
                      <td>{r.feedType}</td>
                      <td>{r.cost}</td>
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

export default Feed;
