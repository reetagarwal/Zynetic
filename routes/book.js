const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { authMiddleware } = require("../middleware");

router.post("/", authMiddleware, bookController.create);
router.get("/", bookController.getAll);
router.get("/:id", bookController.getOne);
router.put("/:id", authMiddleware, bookController.update);
router.delete("/:id", authMiddleware, bookController.remove);
router.get("/search/filter", bookController.search);

module.exports = router;
