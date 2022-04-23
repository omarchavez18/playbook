// se importa module de express
const express = require("express");
const app = express();
const port = 3000; // localhost:3000

//req = request  res= response
app.get("/", (req, res) => {
  res.send("hola a todos los compañeros explorers con todo|");
});

app.listen(port, () => {
  console.log("server listo!!");
});
