module.exports = function (sequelize, DataTypes) {

  var SelectSizingBasis = sequelize.define("SelectSizingBasis", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : DataTypes.STRING
  }, {
    underscored: true,
    tableName: "select_sizing_basis"
  });

  return SelectSizingBasis;
};