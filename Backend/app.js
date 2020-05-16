var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

let authorised = true;
function checkAuth(req, res, next) {
  if (authorised) {
    next();
  } else {
    res.status(403).send("Unauthorised");
    return;
  }
}

app.use("/", checkAuth);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!"
  });
});

module.exports = app;
