const express = require('express');
const userRouter = require('./api/users/user.router')

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(5000, () => { console.log("Server Up on port 5000 ..."); })