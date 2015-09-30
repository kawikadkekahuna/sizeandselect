module.exports = function (sequelize, DataTypes) {

  var ProjectStatus = sequelize.define("ProjectStatus", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "project_statuses",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'projects'.
       * Relationship association: belongsTo('projects')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return ProjectStatus;
};