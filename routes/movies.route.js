const { Router } = require("express");
const { moviesController } = require("../controllers/movies.controller");

const router = Router();

router.post("/", moviesController.addMovie);
router.post("/:id", moviesController.addImages);
router.delete("/:id", moviesController.deleteMovie);

router.get("/", moviesController.getMovies);
router.get("/categories/:id", moviesController.getMoviesByCategory);
router.get("/:id", moviesController.getMovieById)

module.exports = router;
