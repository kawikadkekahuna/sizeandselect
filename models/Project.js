module.exports = function (sequelize, DataTypes) {

  var Project = sequelize.define("Project", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    project_name: DataTypes.STRING,
    company_name: DataTypes.STRING,
    location: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "projects",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'users'.
       * Inner join linked between 'tags'.
       * Relationship association: belongsTo('users')
       * Relationship association: hasMany('tag')
       * }
       */
      associate: function(models) {
        Project.belongsTo(models.User,{
          onDelete: 'CASCADE',
          foreignKey:{
            allowNull: false
          }
        });
      }
    }
  });

  return Project;
};