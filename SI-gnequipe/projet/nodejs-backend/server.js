const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models/index.js");
db.sequelize.sync();
  
// simple route
app.get("/", (req, res) => {
  res.json({ message: "API welcome" });
});

// Routes for authentication API
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/flight.routes')(app);
require('./app/routes/reservation.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

