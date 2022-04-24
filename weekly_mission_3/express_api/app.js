const express = require("express");

// app de express
const app = express();

//indicamos que usaremos JSON
app.use(express.json());

//puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// esto es un endpoint
//routes
//Methods HTTP: GET,POST, PUT, DELETE
const explorer1 = { id: 1, name: "explorer1Omar" };
const explorer2 = { id: 2, name: "explorer2Chimo" };
const explorer3 = { id: 3, name: "explorer3Pierre" };
const explorers = [explorer1, explorer2, explorer3];
app.get("/v1/explorers", (req, res) => {
  console.log(`GET Explorers V1 API ${new Date()}`);

  //HTTP CODE STATUS: 200
  res.status(200).json(explorers);
});

//asi inicializamos la app
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
