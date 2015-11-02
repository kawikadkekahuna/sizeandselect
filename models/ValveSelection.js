module.exports = function (sequelize, DataTypes) {

  var ValveSelection = sequelize.define("ValveSelection", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    underscored: true,
    tableName: "valve_selections",
    classMethods: {
      associate: function(models) {
        ValveSelection.belongsTo(models.OrificeSize, {foreignKey: 'orifice_size_id'});
        ValveSelection.belongsTo(models.ConnectionSize, {foreignKey: 'connection_size_id'});
        ValveSelection.belongsTo(models.InletFlange, {foreignKey: 'inlet_flange_id'});
        ValveSelection.belongsTo(models.FlangeFacing, {foreignKey: 'flange_facing_id'});
        ValveSelection.belongsTo(models.TrimType, {foreignKey: 'trim_type_id'});
        ValveSelection.belongsTo(models.SeatType, {foreignKey: 'seat_type_id'});
        ValveSelection.belongsTo(models.MaterialVariable, {foreignKey: 'material_variable_id'});
        ValveSelection.belongsTo(models.TagCalculation, {foreignKey: 'tag_calculation_id'});
      }
    }
  });

  return ValveSelection;
};