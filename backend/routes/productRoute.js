const express = require("express");
const { getAllPopular, createMovie } = require("../controllers/movieController");
const { getAllUpcoming, createUpcoming } = require("../controllers/upcomingController");

const router = express.Router();

router.route("/movies").get(getAllPopular);
router.route("/upcoming/movie").get(getAllUpcoming);
router.route("/upcoming/new").post(createUpcoming);
router.route("/product/new").post(createMovie);


module.exports = router;