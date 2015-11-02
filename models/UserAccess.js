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
      associate : function (models) {
        UserAccess.belongsTo(models.User, {foreignKey: 'user_id'});
        UserAccess.belongsTo(models.Tag, {foreignKey: 'tag_id'});
      }
    }
  });

  return UserAccess;
};