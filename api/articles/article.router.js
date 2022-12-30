const express = require('express');
const { getArticles, getSavedArticlesByUser } = require("./article.controller")
const auth = require('../../config/auth')
const router = express.Router();

router.get("/", auth, getArticles)
router.get("/:id", auth, getSavedArticlesByUser)

module.exports = router