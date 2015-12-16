module.exports = function (sequelize, DataTypes) {

  var Media = sequelize.define("Media", {
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
    tableName: "medias"
  });

  return Media;
};