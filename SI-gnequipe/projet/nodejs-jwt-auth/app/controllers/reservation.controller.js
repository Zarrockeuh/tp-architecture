const db = require("../models");
const Reservation = db.reservation;

exports.reservationList = (req, res) => {
    //Getting the reservation list available by user
    Reservation.findAll({
        where: {
            useremail: req.body.useremail
        }
    })
    .then(reservation => {
        res.send({
            reservation
        });
    });

};