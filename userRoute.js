const express = require("express");

const router = express.Router();

router.get("/user", async (req, res) => {
  res.status(200).json({ name: "Ali" });
});

router.post("/register", async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ err: "Missing field!" });
    return;
  }

  res.status(201).json({ msg: "User registered successfully!" });
});

router.get("/", (req, res) => res.send("Hello server!"));

module.exports = router;
