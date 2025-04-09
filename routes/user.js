const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware } = require("../middleware");

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.put("/", authMiddleware, userController.update);
router.get("/bulk", userController.getBulk);

module.exports = router;
