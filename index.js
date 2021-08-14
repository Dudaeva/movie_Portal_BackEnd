const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(require("./routes/index"));

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://into:intocode@cluster0.hv9gm.mongodb.net/movie_Portal_BackEnd",
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
    app.listen(3000);
    console.log("Сервер запущен...");
  } catch (e) {
    res.json(e);
  }
};
start();
