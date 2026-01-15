require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔍 DEBUG: check if env is loaded
console.log("MONGO_URI =", process.env.MONGO_URI);

// 🔗 CONNECT TO MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas Connected ✅");
    
    // ROUTES (after DB connection)
    app.use("/api/users", require("./routes/userRoutes"));

    app.get("/", (req, res) => {
      res.send("Backend server running");
    });

    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed ❌");
    console.error(err.message);
  });
