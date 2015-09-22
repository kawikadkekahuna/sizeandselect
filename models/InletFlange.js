module.exports = function (sequelize, DataTypes) {

  var InletFlange = sequelize.define("InletFlange", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rating: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "inlet_flanges",
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

  return InletFlange;
};