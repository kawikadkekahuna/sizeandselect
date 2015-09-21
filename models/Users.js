module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    name : DataTypes.STRING,
    created_at : DataTypes.DATE,
    updated_at : DataTypes.DATE
  },{
    underscored: true,
    tableName: 'Users'
    //Need to add in class methods
  });
  return User;
}