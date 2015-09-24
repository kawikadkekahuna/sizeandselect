module.exports = function (sequelize, DataTypes) {

  var UserAccess = sequelize.define("UserAccess", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    underscored: true,
    tableName: "user_accesses",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'message'.
       * Inner join linked between 'tags'
       * Relationship association: hasMany('users')
       * Relationship association: hasOne('tag')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return UserAccess;
};