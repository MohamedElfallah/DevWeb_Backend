const {articles, articlesOfuser} = require("./article.service")


module.exports = {
    getArticles : (req, res) => {
        const {source} = req.query
        console.log(source)
        
        articles(source, (error, results)=>{
            if(error) return res.json({success : 0,
            message: error});
            return res.json({success : 1, data : results})
        })
    },
    getSavedArticlesByUser: (req,res)=>{
        const data = req.params;
        articlesOfuser(data,(error,results)=>{
            if(error) return res.json({success:0, message: "DB connection failure"})
            return res.json({
                success:1,
                data: results
            })
        })
    }
}