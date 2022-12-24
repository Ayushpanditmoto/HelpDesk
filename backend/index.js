const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "config.env") });
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
