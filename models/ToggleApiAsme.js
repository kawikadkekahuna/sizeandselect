module.exports = function (sequelize, DataTypes) {

  var ToggleApiAsme = sequelize.define("ToggleApiAsme", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : DataTypes.STRING
  }, {
    underscored: true,
    tableName: "toggle_api_asme_sizing"
  });

  return ToggleApiAsme;
};