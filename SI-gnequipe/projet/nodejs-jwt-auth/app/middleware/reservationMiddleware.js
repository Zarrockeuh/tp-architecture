/*

const { createReservation } = require('../controllers/reservation.controller');
const db = require('../models');
const Flight = db.flight;

completing = (req, res, next) => {
    Flight.findOne({
        where: {
            id: req.body.flightid
        }
    })
      .then (repMiddle => {  
        createReservation(req,repMiddle);
        res.status(200).send("Validé");
      })
      
      .catch(err => { 
          res.status(400).send({err: err.message
          });
      });
      
      //next();
};

const reservationMiddleware = {
    completing: completing,
  
  };
module.exports = reservationMiddleware;
*/