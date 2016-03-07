module.exports = function (sequelize, DataTypes) {

  var ValveSelection = sequelize.define("ValveSelection", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    tableName: "valve_selections",
    classMethods: {
      associate: function(models) {
        ValveSelection.belongsTo(models.OrificeSize);
        ValveSelection.belongsTo(models.ConnectionSize);
        ValveSelection.belongsTo(models.InletFlange);
        ValveSelection.belongsTo(models.FlangeFacing);
        ValveSelection.belongsTo(models.TrimType);
        ValveSelection.belongsTo(models.SeatType);
        ValveSelection.belongsTo(models.MaterialVariable);
        ValveSelection.belongsTo(models.TagSheet);
      }
    }
  });

  return ValveSelection;
};