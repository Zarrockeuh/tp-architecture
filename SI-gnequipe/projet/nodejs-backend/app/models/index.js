const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/users.models.js")(sequelize, Sequelize);
db.airport = require("../models/airport.models.js")(sequelize, Sequelize);
db.plane = require("../models/plane.models.js")(sequelize, Sequelize);
db.flight = require("../models/flight.models.js")(sequelize, Sequelize);
db.reservation = require("../models/reservation.models.js")(sequelize, Sequelize);

module.exports = db;