// require express, handlebars, routes
const express = require ("express");
const app = express();
const routes = require("./controllers/burgersController.js");
const db = require("./models");

// create port variable
const PORT = process.env.PORT || 8080;

// create app using express


const expressHandlebars = require ("express-handlebars");

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });






