module.exports = function (sequelize, DataTypes) {

  var MediaType = sequelize.define("MediaType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    k_constant: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: "media_types"
  });

  return MediaType;
};