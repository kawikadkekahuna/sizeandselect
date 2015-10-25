module.exports = function (sequelize, DataTypes) {

  var TemperatureUnit = sequelize.define("TemperatureUnit", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    timestamps:false,
    underscored: true,
    tableName: "temperature_units",
  });

  return TemperatureUnit;
};
