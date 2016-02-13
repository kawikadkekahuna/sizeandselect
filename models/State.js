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
    timestamps: false,
    underscored: true,
    tableName: "states"
  });

  return State;
};