module.exports = function (sequelize, DataTypes) {

  var Orifice = sequelize.define("Orifice", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orifice_type: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "orifices",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'valve_selections'.
       * Inner join linked between 'orifices_sizes'
       * Relationship association: belongsTo('valve_selections')
       * Relationship association: hasOne('orifices_size')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return Orifice;
};