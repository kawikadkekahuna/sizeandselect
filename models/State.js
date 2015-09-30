module.exports = function (sequelize, DataTypes) {

  var State = sequelize.define("State", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING
  }, {
    underscored: true,
    timestamps:false,
    tableName: "states"
  });

  return State;
};