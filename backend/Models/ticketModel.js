const mongoose = require("mongoose");
const TicketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UserModel",
  },
  product: {
    type: String,
    required: [true, "Please enter product name"],
    enum: [
      "Iphone",
      "Macbook",
      "Ipad",
      "Apple Watch",
      "Airpods",
      "Apple TV",
      "Homepod",
      "Accessories",
    ],
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
  },
  status: {
    type: String,
    required: [true, "Please enter status"],
    enum: ["New", "Open", "Closed"],
    default: "New",
  },
  priority: {
    type: String,
    required: [true, "Please enter priority"],
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TicketModel", TicketSchema);
