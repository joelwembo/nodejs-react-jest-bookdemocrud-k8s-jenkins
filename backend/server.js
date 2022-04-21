/*  App : Book Demo
    Author : Joel Otepa Wembo
*/
const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
// the framework used
const app = express();

//testing modules dependencies
// preventing others ip access to this rest api
var corsOptions = {
  origin: "http://localhost:3000" // for our frontend
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// creating models and connecting to the mongodb database
const dbmodel = require("./app/models");

try {

  dbmodel.mongoose
  .connect(dbmodel.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to xxx the MongoDB.ghgh...");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
}
catch(error) {
    console.log(error)
}
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Demo Application Server Started...." + req});
});

require("./app/routes/routes")(app);

// set port, listen for requests
try {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => { console.log(`the Demo Server is running on port ${PORT}.`); });
}
catch(error) {
  console.log("something wrong with the server!" + error)
}
