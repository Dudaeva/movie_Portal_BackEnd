const Category = require("../models/Category.model");

module.exports.categoriesController = {
  addCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      });
      res.json("Категория добавлена");
    } catch (err) {
      res.json(err);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json("Категория удалена");
    } catch (err) {
      res.json(err);
    }
  },
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      res.json(err);
    }
  },
};
