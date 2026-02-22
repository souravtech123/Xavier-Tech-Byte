const express = require('express')
const JoinXTS = require('../models/JoinXTS')

const router = express.Router();

// POST: Join XTS Form
router.post("/join", async (req, res) => {
  try {
    const formData = req.body;

    await JoinXTS.create(formData);

    res.status(201).json({ message: "Application submitted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    
  }
});

module.exports = router
