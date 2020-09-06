module.exports = function(sequelize, DataTypes) {
  const Restaraunt = sequelize.define("Restaraunt", {
    Sanitized: {
      type: DataTypes.BOOLEAN,
    },
    Name: {
      type: DataTypes.STRING,
    },
    OutdoorIndoorTable: {
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
