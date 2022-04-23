// se importa module de express
const express = require("express");
const app = express();
const port = 3000; // localhost:3000

//localhost:3000
//req = request  res= response
app.get("/", (req, res) => {
  res.send("hola a todos los compañeros explorers con todo|");
});

//localhost:3000/launchx
//req = request  res= response
app.get("/launchx", (req, res) => {
  res.send("Bienvenidos a launchX");
});

//localhost:3000/node
//req = request  res= response
app.get("/node", (req, res) => {
  const explorer1 = { id: 18, name: "OmarChavez", empresa: "EPAM" };
  const explorer2 = { id: 20, name: "DiegoHernandez", empresa: "EPAM" };
  const explorer3 = { id: 22, name: "PierreBarba", empresa: "wizeline" };
  res.send([explorer1, explorer2, explorer3]);
});

app.listen(port, () => {
  console.log("server listo!!");
});
