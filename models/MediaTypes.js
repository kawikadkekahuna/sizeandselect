module.exports = function (sequelize, DataTypes) {

  var MediaType = sequelize.define("MediaType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    tableName: "media_types"
  });

  return MediaType;
};