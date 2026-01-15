const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/User");

// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    // 🔍 DEBUG LOGS
    console.log("REGISTER API HIT");
    console.log("Request Body:", req.body);

    const { email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({
      email,
      password: hashedPassword
    });

    await user.save();

    console.log("USER SAVED TO DATABASE ✅");

    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("REGISTER ERROR ❌:", err);
    res.status(500).json({ error: err.message });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    console.log("LOGIN API HIT");
    console.log("Request Body:", req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid password");
      return res.status(400).json({ message: "Invalid password" });
    }

    console.log("LOGIN SUCCESSFUL ✅");

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email
      }
    });
  } catch (err) {
    console.error("LOGIN ERROR ❌:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
