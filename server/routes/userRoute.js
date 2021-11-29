const express = require("express");

const router = express.Router();

// import User from "../models/user";

// Home page Route
router.get("/", (req, res) => {
  res.send("Home Page");
});

router.get("/about", (req, res) => {
  res.send("About page");
});
// Configuring routes to send data to db

module.exports = router;
