const express = require('express');
const {getArticles, getSavedArticlesByUser} = require("./article.controller")
const router = express.Router(); 

router.get("/", getArticles)
router.get("/:id", getSavedArticlesByUser)

module.exports = router