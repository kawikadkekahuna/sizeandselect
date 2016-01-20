module.exports = function (sequelize, DataTypes) {

  var Media = sequelize.define("Media", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    compressiblity: DataTypes.INTEGER,
    molecular_weight: DataTypes.INTEGER,
    specific_gravity: DataTypes.INTEGER,
    specific_heat: DataTypes.INTEGER,
    viscosity: DataTypes.INTEGER
  }, {
    tableName: "medias"
  });

  return Media;
};