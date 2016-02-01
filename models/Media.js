module.exports = function (sequelize, DataTypes) {

  var Media = sequelize.define("Media", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    compressiblity: DataTypes.DOUBLE,
    molecular_weight: DataTypes.DOUBLE,
    specific_gravity: DataTypes.DOUBLE,
    specific_heat: DataTypes.DOUBLE,
    viscosity: DataTypes.DOUBLE
  }, {
    timestamps: false,
    tableName: "medias"
  });

  return Media;
};