module.exports = function (sequelize, DataTypes) {

  var MediaType = sequelize.define("MediaType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    k_factor: DataTypes.DOUBLE
  }, {
    underscored: true,
    tableName: "media_types"
  });

  return MediaType;
};