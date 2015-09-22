module.exports = function (sequelize, DataTypes) {

  var TrimType = sequelize.define("TrimType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: DataTypes.STRING

  }, {
    underscored: true,
    tableName: "trim_types",
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

  return TrimType;
};