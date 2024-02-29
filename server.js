const express = require("express");
const inventoryRoutes = require("./src/inventory/routes.js");
require("dotenv").config();

const app = express();
const port = 8003;

app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Henlo");
});

// API route
// http://localhost:8003/api/v1/inventory

app.use("/api/v1/inventory", inventoryRoutes);

app.listen(port, () => {
  console.log("running on port", port);
});
