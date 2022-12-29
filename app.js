const express = require('express');
const userRouter = require('./api/users/user.router')
const articleRouter = require('./api/articles/article.router')

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/articles", articleRouter);

app.listen(5000, () => { console.log("Server Up on port 5000 ..."); })