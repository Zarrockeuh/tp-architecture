const controller = require("../controllers/reservation.controller");

module.exports = function(app) {
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
            );
            next();
        });
        app.get(
            "/api/flight/alreadyreserved",
            controller.reservationList
        );

        app.post("/api/flight/reservation", controller.createReservation);
}