module.exports = function (sequelize, DataTypes) {

  var AccountType = sequelize.define("AccountType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "account_types",
    classMethods: {
      AccountType.hasMany(models.User);
    }
  });

  return AccountType;
};
