// const c = require("./func");
// console.log(c.func.b(20));

// const os = require("os");
// console.log(os);
// console.log(os.cpus());

//Работа с файлами

// const fs = require("fs");
// let users = [{ name: "Иван", id: 15 }];
// fs.writeFile("test.json", JSON.stringify(users), err => {
//     if (err) {
//         console.log(err);
//     }
// });

// let user = '{"name": "Алексей", "id": 10}';
// fs.readFile("test.json", "UTF-8", (err, data) => {//data - исходный код файла, из которого считываем инфу
//     if (err) {
//         console.log(err);
//     } else {
//         let users = JSON.parse(data);
//         users.push(JSON.parse(user));
//         fs.writeFile("test.json", JSON.stringify(users), err => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//     }
// });

// const momemt = require("moment");
// console.log(momemt().format('DD MMMM YYYY, hh:mm:ss a'));

// const http = require("http");
// const server = http.createServer((req, res) => {//req - запрос на сервер, res - ответ с сервера
//     if (req.url == '/') {//если req.url равен главной странице
//         res.write("Welcome to server");
//         res.end();
//     }
// });

// server.on("connection", socket => {
//     console.log("Соединение установлено");
// });

// server.listen("3000");//ввести в браузере http://localhost:3000/

