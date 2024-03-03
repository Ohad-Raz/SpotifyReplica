const express = require("express");
const router = express.router();
const songController = require("../controllers/songController");

router.get("/", songController.getAllSongs);
module.exports = router;
