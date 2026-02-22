const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js');
const xtsRoutes = require('./routes/xtsRoute.js')

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Routes
app.use("/api/xts", xtsRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("XTS Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
