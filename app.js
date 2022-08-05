var express = require("express");

var router_telegram = require("./routes/telegram");
var app = express();

const path = require("path");

const hostname = "127.0.0.1";
const port = 3003;


app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.render("index", {
    title: 'Hey',
    message: 'Hello there!',
  });
});


app.use("/telegram", router_telegram);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
