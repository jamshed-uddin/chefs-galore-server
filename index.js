const express = require("express");
const chefs = require("./data/chefs.json");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "this server is running" });
});

app.get("/chefs", (req, res) => {
  res.send(services);
});

app.listen(port, () => {
  console.log("the server is running");
});
