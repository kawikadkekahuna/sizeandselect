module.exports = function (sequelize, DataTypes) {

  var Device = sequelize.define("Device", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : DataTypes.STRING
  }, {
    underscored: true,
    tableName: "devices"
  });

  return Device;
};