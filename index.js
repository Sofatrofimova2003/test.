require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const { response } = require("express");
const routerCar = require("./routes/car.route");

const app = express();
const server = http.createServer(app)

const port = process.env.PORT || 3003;

app.use(express.json()); // работа с форматами
app.use(express.urlencoded({ extended: true })); // передача параметров в строке

app.use(express.static("public"));
//подключаем статичные файлы
app.use((err, request, response, next) => {
  //midleware - промежуточный обработчик
  console.log(err);
  response.status(500).send("server crash");
  next();
});
app.use("/api/car", routerCar);

/*app.use("/", (req, res)=>{
    res.status(200).json('Hello World домой хочу ')});
*/


server.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`);
})

module.exports = app;
