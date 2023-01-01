const express = require('express');
const cors = require('cors')
const { getArticles, getSavedArticlesByUser } = require("./article.controller")
const auth = require('../../config/auth')
const router = express.Router();

router.get("/", cors(),getArticles)
router.get("/:id", auth, getSavedArticlesByUser)

module.exports = router