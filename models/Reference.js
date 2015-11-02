module.exports = function (sequelize, DataTypes) {

  var Reference = sequelize.define("Reference", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : DataTypes.STRING,
    file_location : DataTypes.STRING
  }, {
    underscored: true,
    tableName: "references"
  });

  return Reference;
};