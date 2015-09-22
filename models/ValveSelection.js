module.exports = function (sequelize, DataTypes) {

  var ValveSelection = sequelize.define("ValveSelection", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: DataTypes.STRING

  }, {
    underscored: true,
    tableName: "valve_selections",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'orifices'.
       * Inner join linked between 'inlet_flange'.
       * Inner join linked between 'trim_type'.
       * Inner join linked between 'material_variable'.
       * Inner join linked between 'connection_size'.
       * Inner join linked between 'flange_facing'.
       * Inner join linked between 'seat_type'.
       * Inner join linked between 'tag_calculation'.
       * Relationship association: hasMany('orifice')
       * Relationship association: hasMany('inlet_flange')
       * Relationship association: hasMany('trim_type')
       * Relationship association: hasMany('material_variable')
       * Relationship association: hasMany('connection_size')
       * Relationship association: hasMany('flange_facing')
       * Relationship association: hasMany('seat_type')
       * Relationship association: hasOne('tag_calculations')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return ValveSelection;
};