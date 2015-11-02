module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    company: DataTypes.STRING,
    job_title: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    user_picture: DataTypes.STRING,
    reset_password_token : DataTypes.STRING,
    reset_password_expires : DataTypes.BIGINT,
    account_hidden: DataTypes.BOOLEAN
  }, {
    underscored: true,
    tableName: "users",
    classMethods: {
      associate : function (models) {
        User.belongsTo(models.AccountType, {foreignKey: 'account_type_id'});
      }
    }
  });

  return User;
};