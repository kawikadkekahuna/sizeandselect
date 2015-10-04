module.exports = function (sequelize, DataTypes) {

  var ValveType = sequelize.define("ValveType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING

  }, {
    timestamps:false,
    underscored: true,
    tableName: "valve_types",
    classMethods: {
    }
  });

  return ValveType;
};