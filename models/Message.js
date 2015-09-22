module.exports = function (sequelize, DataTypes) {

  var Message = sequelize.define("Message", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: DataTypes.STRING

  }, {
    underscored: true,

    tableName: "messages",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'message_rooms'.
       * Relationship association : belongsTo('message_rooms')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return Message;
};