const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    useremail: {
      type: DataTypes.STRING(320),
      allowNull: false,
      references: {
        model: 'users',
        key: 'email'
      }
    },
    planeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plane',
        key: 'id'
      }
    },
    flightid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'flight',
        key: 'id'
      }
    },
    cost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reservation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "reservation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
