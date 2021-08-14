const Review = require("../models/Review.model");

module.exports.reviewsController = {
  addReviews: async (req, res) => {
    try {
      await Review.create({
        author: req.body.author,
        movieId: req.body.movieId,
        text: req.body.text,
      });
      res.json("Отзыв добавлен");
    } catch (err){
      res.json(err);
    }
  },
  getReviews: async (req, res) => {
    try {
      const reviews = await Review.findById({ movieId: req.params.id });
      res.json(reviews);
    } catch {
      res.json("error");
    }
  },
}