module.exports = function (sequelize, DataTypes) {

  var MessageRoom = sequelize.define("MessageRoom", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    underscored: true,
    tableName: "message_rooms",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'message'.
       * Relationship association: hasMany('messages')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return MessageRoom;
};