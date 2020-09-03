module.exports = function(sequelize, DataTypes) {
  const Table = sequelize.define("Table", {
    numTables: {
      type: DataTypes.INTEGER,
    },
    reserveTable: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    restaraunt_id: {
      type: DataTypes.INTEGER,
    },
  });
  return Table;
};
