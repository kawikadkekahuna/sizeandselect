module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    name : DataTypes.STRING,
    created_at : DataTypes.DATE,
    updated_at : DataTypes.DATE,
  },{
    underscored: true,
    //Lowercase tablenames and plural
    tableName: 'users'
    //Need to add in class methods
  });
  return User;
}