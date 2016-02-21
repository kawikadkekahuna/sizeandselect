module.exports = function (sequelize, DataTypes) {

  var CodeType = sequelize.define("CodeType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : DataTypes.STRING
  }, {
    timestamps: false,
    tableName: "code_types",
  });

  return CodeType;
};