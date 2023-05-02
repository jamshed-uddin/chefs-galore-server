const express = require("express");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const foods = require("./data/foods.json");
const reviews = require("./data/reviews.json");

app.get("", (req, res) => {
  // home page text
  res.send(`
  <div >
  <h1 className="">The Chefs Galore Server</h1>
  <hr />
  <h3 className="">All Chefs</h3>
  <p className="">https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/chefs</p>
  <p className="">_____________________</p>
  <h3 className="">Single Chef detail</h3>
  <p className="">https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/chefs/id</p>
  <p className="">_____________________</p>
  <h3 className="">Recipes</h3>
  <p className="">https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/recipes</p>
  <p className="">_____________________</p>
  <h3 className="">Foods</h3>
  <p className="">https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/foods</p>
  <p className="">_____________________</p>
  <h3 className="">Reviews</h3>
  <p className="">https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/reviews</p>
  <p className="">_____________________</p>
  </div>
`);
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
  console.log(`the server is running on port ${port}`);
});
