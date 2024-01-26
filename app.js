const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const hbs = exphbs.create();
const port = 3000;
const hostname = "127.0.0.1";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const generateDate = require("./helpers/generateDate").generateDate


mongoose.connect("mongodb://localhost:27017/nodeblog_db");

app.use(fileUpload());
app.use(express.static("public"));


hbs.handlebars.registerHelper("generateDate", generateDate);



app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

const myMiddleware = (req, res, next) => {
  console.log("Middleware çalıştı");
  next();
};

app.use('/', myMiddleware);
app.use(bodyParser.json());

const main = require("./routes/main");
const posts = require("./routes/posts");

app.use("/", main);
app.use("/posts", posts);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
