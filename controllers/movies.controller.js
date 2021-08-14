const Movie = require("../models/Movie.model");
const path = require("path")

module.exports.moviesController = {
  addMovie: async (req, res) => {
    try {
      await Movie.create({
        nameMovie: req.body.nameMovie,
        category: req.body.category,
        years: req.body.years,
        description: req.body.description,
        image: req.body.image,
      });
      res.json("Фильм добавлен");
    } catch (err) {
      res.json(err);
    }
  },
  addImages: async (req, res) => {
    try {
      const { image } = req.files;
      const newFile = `/images/${Math.random() * 10000}${path.extname(
        image.name
      )}`;

      image.mv(`./public${newFile}`, async (err) => {
        if (err) {
          console.log(err);
        } else {
          const movie = await Movie.findById(req.params.id);
          movie.image = newFile;
          await movie.save();
          res.json("Файл загружен");
        }
      });
    } catch (err) {
      res.json(err);
    }
  },
  deleteMovie: async (req, res) => {
    try {
      await Movie.findByIdAndRemove(req.params.id);
      res.json("Фильм удален");
    } catch (err) {
      res.json(err);
    }
  },
  getMovies: async (req, res) => {
    try {
      const Movie = await Movie.find({}).populate("category");
      res.json(Movie);
    } catch (err) {
      res.json(err);
    }
  },
  getMoviesByCategory: async (req, res) => {
    try {
      const Movie = await Movie.find({ category: req.params.id });
      res.json(Movie);
    } catch (err) {
      res.json(err);
    }
  },
};
