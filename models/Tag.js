module.exports = function (sequelize, DataTypes) {

  var Tag = sequelize.define("Tag", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    pid: DataTypes.STRING,
    service: DataTypes.STRING,
    line_number: DataTypes.INTEGER,
    model_number: DataTypes.STRING,
    need_by_date: DataTypes.STRING,
    ship_date: DataTypes.STRING,
    tracking_number: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "tags",
    classMethods: {
      associate: function(models) {
        Tag.belongsTo(models.Project, {foreignKey: 'project_id'});
        Tag.belongsTo(models.Device, {foreignKey: 'device_id'});
        Tag.belongsTo(models.ProjectStatus, {foreignKey: 'project_status_id'});
      }
    }
  });
  return Tag;
};