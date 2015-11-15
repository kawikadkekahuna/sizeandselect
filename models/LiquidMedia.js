module.exports = function (sequelize, DataTypes) {

  var LiquidMedia = sequelize.define("LiquidMedia", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : DataTypes.STRING,
    specific_gravity : DataTypes.INTEGER,
    viscosity : DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: "liquid_medias"
  });

  return LiquidMedia;
};