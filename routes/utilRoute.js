const express = require("express");

const { fetchData } = require("../controllers/marketController");
const router = express.Router();


router.get("/stock", fetchData);

module.exports = router;