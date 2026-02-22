const mongoose = require('mongoose')

const joinXTSSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    role: String,
    message: String,
  },
  { timestamps: true }
);

const Users = mongoose.model("JoinXTS", joinXTSSchema);
module.exports = Users ;
