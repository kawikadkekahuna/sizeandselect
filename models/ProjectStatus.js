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
      associate : function (models) {
        // ProjectStatus.hasMany(models.Project);
      }
    }
  });

  return ProjectStatus;
};