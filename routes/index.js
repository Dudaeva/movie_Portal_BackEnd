const { Router } = require("express");

const router = Router();

router.use("/movies", require("./movies.route"))
router.use("/categories", require("./categories.route"));
router.use("/reviews", require("./reviews.route"));

module.exports = router;