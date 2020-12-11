module.exports = {
    HOST: "192.168.1.39",
    USER: "airportdbuser",
    PASSWORD: "airportdbpassword",
    DB: "airportdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };