module.exports = function (sequelize, DataTypes) {

  var InletFlange = sequelize.define("InletFlange", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rating: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: "inlet_flanges",
  });

  return InletFlange;
};