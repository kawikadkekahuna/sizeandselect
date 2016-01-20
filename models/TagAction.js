module.exports = function (sequelize, DataTypes) {

  var TagAction = sequelize.define("TagAction", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : DataTypes.STRING
  }, {
    underscored: true,
    tableName: "tag_actions"
  });

  return TagAction;
};