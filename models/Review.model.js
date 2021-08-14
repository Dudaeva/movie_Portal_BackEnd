const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  author: String,
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
  },
  text: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
