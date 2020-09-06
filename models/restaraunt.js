module.exports = function(sequelize, DataTypes) {
  const Restaraunt = sequelize.define("Restaraunt", {
    sanitized: {
      type: DataTypes.BOOLEAN,
    },
    name: {
      type: DataTypes.STRING,
    },
    outdoorIndoorTable: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.DECIMAL(10, 8),
    },
    lng: {
      type: DataTypes.DECIMAL(11, 8),
    },
  });
  return Restaraunt;
};
