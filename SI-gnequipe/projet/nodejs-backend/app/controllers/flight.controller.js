const db = require("../models");
const Flight = db.flight;

exports.flightList = (req, res) => {
    // Getting the flight list available in database
    Flight.findAll()
    .then(Flight =>
        res.send({Flight}));
};