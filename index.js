var express = require("express");
const bodyParser = require("body-parser");
const { apiRouter } = require("./endpoints");
require("console-stamp")(console, { pattern: "dd/mm/yyyy HH:MM:ss.l" });
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.render("index.html");
});
app.use(bodyParser.json({}));
app.use(apiRouter);

var port = 3000;
app.listen(port, function() {
  console.log("Server", process.pid, "listening on port", port);
});
