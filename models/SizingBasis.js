module.exports = function (sequelize, DataTypes) {

  var SizingBasis = sequelize.define("SizingBasis", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    overpressure: DataTypes.DOUBLE
  }, {
    tableName: "sizing_basis"
  });

  return SizingBasis;
};