module.exports = function (sequelize, DataTypes) {

  var OrificeSize = sequelize.define("OrificeSize", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: DataTypes.STRING

  }, {
    underscored: true,
    tableName: "orifice_sizes",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'orifices'.
       * Relationship association: belongsTo('orifices')       
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return OrificeSize;
};