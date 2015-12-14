module.exports = function (sequelize, DataTypes) {

  var Tag = sequelize.define("Tag", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    p_and_id: DataTypes.STRING,
    service: DataTypes.STRING,
    line_number: DataTypes.INTEGER,
    model_number: DataTypes.STRING,
    need_by_date: DataTypes.STRING,
    ship_date: DataTypes.STRING,
    tracking_number: DataTypes.STRING
  }, {
    tableName: "tags",
    classMethods: {
      associate: function(models) {
        Tag.belongsTo(models.Device);
        Tag.belongsTo(models.Project);
        Tag.belongsTo(models.ProjectStatus);
      }
    }
  });
  return Tag;
};