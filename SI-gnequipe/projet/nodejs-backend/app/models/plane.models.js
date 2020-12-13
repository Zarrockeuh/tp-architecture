const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plane', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nbseats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'plane',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "plane_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
