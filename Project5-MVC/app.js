const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const { connectToDatabase } = require("./model/DBConnect");
const AppRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // Parse JSON data in the request body

app.use("/api", AppRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // Connect to the database when the server starts
  connectToDatabase();
});
