const db = require("../models");
const Reservation = db.reservation;

exports.reservationList = (req, res) => {
    //Getting the reservation list available by user
    Reservation.findAll()
    .then(reservation => {
        res.send({
            reservation
        });
    
    })
    .catch(err => {
        res.status(400).send({err: err.message
        });
    });
};

exports.createReservation = (req, res) => {
    // Create a reservation for an user
    Reservation.create({
        useremail: req.body.useremail,
        flightid: req.body.flightid,
        cost: req.body.cost,

    }).then (reserv => {  
        res.status(200).send("Réservation validé");
      })
      
      .catch(err => { 
          res.status(400).send({err: err.message
          });
      });

};