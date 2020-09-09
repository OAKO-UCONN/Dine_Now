module.exports = function(sequelize, DataTypes) {
  const Table = sequelize.define("Table", {
    numTables: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    reserveTable: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    restaraunt_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "restaurant",
        key: "id",
      },
    },
  });
  return Table;
};
