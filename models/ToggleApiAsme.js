module.exports = function (sequelize, DataTypes) {

  var ToggleApiAsme = sequelize.define("ToggleApiAsme", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : DataTypes.STRING
  }, {
    timestamps:false,
    tableName: "toggle_api_asme_sizing"
  });

  return ToggleApiAsme;
};