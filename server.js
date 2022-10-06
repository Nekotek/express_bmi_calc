const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.listen(port, function () {
  console.log("Server started on port: " + port);
});
app.post("/bmicalculator", function (req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = (n2 / Math.pow(n1, 2)).toFixed(2);
  res.send("Your BMI is: " + result);
});
