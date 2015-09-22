module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: DataTypes.STRING

  }, {
    underscored: true,
    tableName: "users",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'account_types'.
       * Inner join linked between 'projects'.
       * Inner join linked between 'user_accesses'.
       * Inner join linked between 'message'.
       * Inner join linked between 'message_rooms'.
       * Relationship association: hasOne('account_types')
       * Relationship association: hasMany('projects')
       * Relationship association: belongsTo('user_accesses')
       * Relationship association: hasMany('messages')
       * Relationship association: hasMany('message_rooms')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return User;
};