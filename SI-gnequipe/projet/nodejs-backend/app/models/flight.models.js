const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flight', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hdep: {
      type: DataTypes.TIME,
      allowNull: false
    },
    harr: {
      type: DataTypes.TIME,
      allowNull: false
    },
    nbstop: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stop: {
      type: DataTypes.STRING,
      allowNull: true
    },
    planeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plane',
        key: 'id'
      }
    },
    departure: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'airport',
        key: 'trigramme'
      }
    },
    arrival: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'airport',
        key: 'trigramme'
      }
    }
  },
   {
    sequelize,
    tableName: 'flight',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "flight_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
