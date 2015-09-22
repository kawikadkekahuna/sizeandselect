module.exports = function (sequelize, DataTypes) {

  var FlangeFacing = sequelize.define("FlangeFacing", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dimensions: DataTypes.STRING

  }, {
    underscored: true,
    tableName: "flange_facings",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'valve_selections'.
       * Relationship association: belongsTo('valve_selections')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return FlangeFacing;
};