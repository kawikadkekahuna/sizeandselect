module.exports = function (sequelize, DataTypes) {

  var TagCalculation = sequelize.define("TagCalculation", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: DataTypes.STRING,
    specific_gravity: DataTypes.DOUBLE,
    viscosity: DataTypes.DOUBLE,
    relief_temperature: DataTypes.DOUBLE,
    operating_temperature: DataTypes.DOUBLE,
    design_min_temperature: DataTypes.DOUBLE,
    design_max_temperature: DataTypes.DOUBLE,
    required_flow_capacity: DataTypes.DOUBLE,
    atm: DataTypes.DOUBLE,
    mawp: DataTypes.DOUBLE,
    operating_pressure: DataTypes.DOUBLE,
    set_pressure: DataTypes.DOUBLE,
    built_up_back_pressure: DataTypes.DOUBLE,
    variable_super_imposed_pressure: DataTypes.DOUBLE,
    constant_super_imposed_pressure: DataTypes.DOUBLE,
    sizing_basis: DataTypes.DOUBLE,
    inlet_loss_percentage: DataTypes.DOUBLE,
    inlet_loss: DataTypes.DOUBLE,
    rupture_disc: DataTypes.DOUBLE,
    orifice_required: DataTypes.DOUBLE,
    overpressure: DataTypes.DOUBLE,
    calculated_area: DataTypes.DOUBLE

  }, {
    underscored: true,
    tableName: "tag_calculations",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'tags'.
       * Inner join linked between 'valve_selections'
       * Relationship association: hasOne('tags')
       * Relationship association: belongsTo('valve_selections')
       * }
       */
      associate: function(models) {
        TagCalculation.belongsTo(models.LiquidMedia, {foreignKey: 'liquid_media_id'});
      }
    }
  });

  return TagCalculation;
};