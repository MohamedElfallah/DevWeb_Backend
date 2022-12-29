const connection = require('../../config/database');

module.exports = {
    articles : (data , callBack) =>{
        if(data){
            connection.query(
                `select * from articles where source='${data}'`,
                (error, results) =>{
                    if(error) return callBack(error);
                    return callBack(null, results); 
                }
            )
        }else {
            connection.query(
                `select * from articles`,
                (error, results) =>{
                    if(error) return callBack(error);
                    return callBack(null, results); 
                }
            )
        }
        }
        ,
    articlesOfuser : (data, callBack)=> {
        connection.query("select a.* from articles a join saved_articles sa on a.id=sa.article_id join users u on u.id = sa.user_id where u.id = ?",
        [data.id],
        (error,results)=> {
            if(error) return callBack(error);
            return callBack(null, results)
        })
    }
}