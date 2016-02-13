module.exports = function (sequelize, DataTypes) {

  var SeatType = sequelize.define("SeatType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING

  }, {
    timestamps: false,
    underscored: true,
    tableName: "seat_types",
  });

  return SeatType;
};