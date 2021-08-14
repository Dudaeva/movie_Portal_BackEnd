const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/categories.controller");

const router = Router();

router.post("/", categoriesController.addCategory);
router.delete("/:id", categoriesController.deleteCategory);
router.get("/", categoriesController.getCategories);

module.exports = router;
