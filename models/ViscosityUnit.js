module.exports = function (sequelize, DataTypes) {

  var ViscosityUnit = sequelize.define("ViscosityUnit", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: "viscosity_units",
  });

  return ViscosityUnit;
};
