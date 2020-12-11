const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('airport', {
    trigramme: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'airport',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "airport_pkey",
        unique: true,
        fields: [
          { name: "trigramme" },
        ]
      },
    ]
  });
};
