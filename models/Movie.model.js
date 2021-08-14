const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    nameMovie: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    years: Number,
    description: String,
    image: String,
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
