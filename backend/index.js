const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "config.env") });
require("colors");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const errorHandler = require("./Middleware/errorMiddleware");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send(`Backend is running on port ${port}`);
});
app.use("/api/users", require("./Routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`.bgBlue);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB".bgGreen);
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`.bgRed);
  });
