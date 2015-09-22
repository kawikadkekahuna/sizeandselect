module.exports = function (sequelize, DataTypes) {

  var TagCalculation = sequelize.define("TagCalculation", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: DataTypes.STRING

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
      // associate: function(models) {

      // }
    }
  });

  return TagCalculation;
};