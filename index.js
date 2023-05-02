const express = require("express");
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const foods = require("./data/foods.json");
const reviews = require("./data/reviews.json");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("", (req, res) => {
  res.send({ message: "this server is running" });
});

// chef and chef detail data
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleChefs = chefs.find((chef) => chef.id === id);
  res.send(singleChefs);
});

// recipes data
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

// data for extra 2 sections
app.get("/foods", (req, res) => {
  res.send(foods);
});
app.get("/reviews", (req, res) => {
  res.send(reviews);
});

app.listen(port, () => {
  console.log("the server is running");
});
