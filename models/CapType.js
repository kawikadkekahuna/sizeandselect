module.exports = function (sequelize, DataTypes) {

  var CapType = sequelize.define("CapType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description : DataTypes.STRING
  }, {
    underscored: true,

    tableName: "cap_types",
  });

  return CapType;
};