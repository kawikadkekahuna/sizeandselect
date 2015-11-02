module.exports = function (sequelize, DataTypes) {

  var DataSheet = sequelize.define("DataSheet", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    file_location : DataTypes.STRING
  }, {
    underscored: true,

    tableName: "data_sheets",
    classMethods: {
      associate: function(models) {
        DataSheet.belongsTo(models.Tag, {foreignKey: 'tag_id'});
      }
    }
  });

  return DataSheet;
};