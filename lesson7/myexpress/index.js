const express = require("express");
const app = express();//в объекте app есть методы http
app.get('/', (req, res) => {
    res.send("Привет!!!!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Сервер активен");
});