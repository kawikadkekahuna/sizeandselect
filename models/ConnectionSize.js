module.exports = function (sequelize, DataTypes) {

  var ConnectionSize = sequelize.define("ConnectionSize", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    size: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "connection_sizes",
  });

  return ConnectionSize;
};