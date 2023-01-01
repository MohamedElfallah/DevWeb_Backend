const { articles, articlesOfuser } = require("./article.service")


module.exports = {
    getArticles: (req, res) => {
        const { source } = req.query

        articles(source, (error, results) => {
            if (error) return res.json({
                success: 0,
                message: error
            });
            return res.json(results.rows )
        })
    },
    getSavedArticlesByUser: (req, res) => {
        const data = req.params;
        console.log(data)
        articlesOfuser(data, (error, results) => {
            if (error) return res.json({ success: 0, message: "DB connection failure" })
            return res.json({
                success: 1,
                data: results.rows
            })
        })
    }
}