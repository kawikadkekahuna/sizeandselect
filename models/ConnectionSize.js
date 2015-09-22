module.exports = function (sequelize, DataTypes) {

  var ConnectionSize = sequelize.define("ConnectionSize", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    size: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "connection_sizes",
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

  return ConnectionSize;
};