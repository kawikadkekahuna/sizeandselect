module.exports = function (sequelize, DataTypes) {

  var AccountType = sequelize.define("AccountType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
   }, {
    timestamps:false,
    underscored: true,
    tableName: "account_types",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'users'.
       * Relationship association: belongsTo('users')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return AccountType;
};
