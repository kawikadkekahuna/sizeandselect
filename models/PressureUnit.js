module.exports = function (sequelize, DataTypes) {

  var PressureUnit = sequelize.define("PressureUnit", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "pressure_units",
  });

  return PressureUnit;
};
