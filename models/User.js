module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username : DataTypes.STRING,
    first_name : DataTypes.STRING,
    last_name : DataTypes.STRING,
    email : DataTypes.STRING,
    password : DataTypes.STRING,
    resetPasswordToken : DataTypes.STRING,
    resetPasswordExpires : DataTypes.DATE,
    city : DataTypes.STRING,
    state : DataTypes.STRING,
    zip_code : DataTypes.INTEGER,
    country : DataTypes.STRING,
    company : DataTypes.STRING,
    job_title : DataTypes.STRING,
    phone_number : DataTypes.INTEGER,
    user_picture : DataTypes.STRING,
    private_account : DataTypes.BOOLEAN,
    created_at : DataTypes.DATE,
    updated_at : DataTypes.DATE
  }, {
    underscored: true,
    tableName: "users",
    classMethods: {
      associate : function(models){
        User.hasOne(models.AccountType, {foreignKey: 'account_type_id'});
      }
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