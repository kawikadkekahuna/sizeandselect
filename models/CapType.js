module.exports = function (sequelize, DataTypes) {

  var CapType = sequelize.define("CapType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description : DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: "cap_types",
  });

  return CapType;
};