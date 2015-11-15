module.exports = function (sequelize, DataTypes) {

  var FlangeFacing = sequelize.define("FlangeFacing", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dimensions: DataTypes.STRING

  }, {
    underscored: true,
    tableName: "flange_facings",
  });

  return FlangeFacing;
};