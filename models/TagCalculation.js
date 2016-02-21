module.exports = function (sequelize, DataTypes) {

  var TagCalculation = sequelize.define("TagCalculation", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    atm: DataTypes.DOUBLE,
    built_up_back_pressure: DataTypes.DOUBLE,
    compressibility: DataTypes.DOUBLE,
    constant_super_imposed_pressure: DataTypes.DOUBLE,
    design_max_temperature: DataTypes.DOUBLE,
    design_min_temperature: DataTypes.DOUBLE,
    inlet_loss: DataTypes.DOUBLE,
    inlet_loss_percentage: DataTypes.DOUBLE,
    mawp: DataTypes.DOUBLE,
    molecular_weight: DataTypes.DOUBLE,
    operating_pressure: DataTypes.DOUBLE,
    operating_temperature: DataTypes.DOUBLE,
    orifice_size: DataTypes.DOUBLE,
    overpressure: DataTypes.DOUBLE,
    relief_temperature: DataTypes.DOUBLE,
    required_flow_capacity: DataTypes.DOUBLE,
    rupture_disc: DataTypes.DOUBLE,
    rupture_disc_checkbox: DataTypes.BOOLEAN,
    set_pressure: DataTypes.DOUBLE,
    specific_gravity: DataTypes.DOUBLE,
    specific_heat: DataTypes.DOUBLE,
    variable_super_imposed_pressure: DataTypes.DOUBLE,
    viscosity: DataTypes.DOUBLE
  }, {
    tableName: "tag_calculations",
    classMethods: {
      associate: function(models) {
        TagCalculation.belongsTo(models.MediaType);
        TagCalculation.belongsTo(models.Media);
        TagCalculation.belongsTo(models.SizingBasis);
      }
    }
  });
  return TagCalculation;
};