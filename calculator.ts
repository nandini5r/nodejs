const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("server responded");
});
app.use(bodyparser());

app.get("/add", (req, res) => {
  let sum = req.body.num1 + req.body.num2;
  res.send(`result: ${sum}`);
});

app.get("/sub", (req, res) => {
  let sub = req.body.num1 - req.body.num2;
  res.send(`result: ${sub}`);
});

app.get("/multiply", (req, res) => {
  let multiply = req.body.num1 * req.body.num2;
  res.send(`result: ${multiply}`);
});

app.get("/divide", (req, res) => {
  let divide = req.body.num1 / req.body.num2;
  res.send(`result: ${divide}`);
});

app.get("/square", (req, res) => {
  let square = req.body.num1 * req.body.num1;
  res.send(`result: ${square}`);
});

app.get("/power", (req, res) => {
  let power = Math.pow(req.body.num1, req.body.num2);
  res.send(`result: ${power}`);
});

app.get("/modulo", (req, res) => {
  let modulo = req.body.num1 % req.body.num2;
  res.send(`result: ${modulo}`);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
