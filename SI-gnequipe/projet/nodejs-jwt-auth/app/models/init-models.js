var DataTypes = require("sequelize").DataTypes;
var _airport = require("./airport.models");
var _flight = require("./flight.models");
var _plane = require("./plane.models");
var _reservation = require("./reservation.models");
var _users = require("./users.models");

function initModels(sequelize) {
  var airport = _airport(sequelize, DataTypes);
  var flight = _flight(sequelize, DataTypes);
  var plane = _plane(sequelize, DataTypes);
  var reservation = _reservation(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  flight.belongsTo(airport, { foreignKey: "arrival"});
  airport.hasMany(flight, { foreignKey: "arrival"});
  flight.belongsTo(airport, { foreignKey: "departure"});
  airport.hasMany(flight, { foreignKey: "departure"});
  reservation.belongsTo(users, { foreignKey: "useremail"});
  users.hasMany(reservation, { foreignKey: "useremail"});
  reservation.belongsTo(flight, { foreignKey: "flightid"});
  flight.hasMany(reservation, { foreignKey: "flightid"});
  flight.belongsTo(plane, { foreignKey: "planeid"});
  plane.hasMany(flight, { foreignKey: "planeid"});

  return {
    airport,
    flight,
    plane,
    reservation,
    users
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
