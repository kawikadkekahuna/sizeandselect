module.exports = function (sequelize, DataTypes) {

  var AsmeSizing = sequelize.define("AsmeSizing", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : DataTypes.STRING
  }, {
    timestamps:false,
    tableName: "asme_sizing"
  });

  return AsmeSizing;
};