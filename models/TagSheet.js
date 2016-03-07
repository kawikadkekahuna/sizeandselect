(function () {
    "use strict";
    module.exports = function (sequelize, DataTypes) {

      var TagSheet = sequelize.define("TagSheet", {
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
        tableName: "tag_sheets",
        classMethods: {
          associate: function(models) {
            TagSheet.belongsTo(models.AsmeSizing);
            TagSheet.belongsTo(models.CodeType);
            TagSheet.belongsTo(models.MediaType);
            TagSheet.belongsTo(models.Media);
            TagSheet.belongsTo(models.SizingBasis);
            TagSheet.belongsTo(models.FlowCapacityUnit);
            TagSheet.belongsTo(models.PressureUnit);
            TagSheet.belongsTo(models.TemperatureUnit);
            TagSheet.belongsTo(models.ViscosityUnit);
          }
        }
      });
      return TagSheet;
    };
}());