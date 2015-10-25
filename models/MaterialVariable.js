module.exports = function (sequelize, DataTypes) {

  var MaterialVariable = sequelize.define("MaterialVariable", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "material_variables",
  });

  return MaterialVariable;
};