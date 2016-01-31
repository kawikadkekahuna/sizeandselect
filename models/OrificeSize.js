module.exports = function (sequelize, DataTypes) {

  var OrificeSize = sequelize.define("OrificeSize", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orifice_type: DataTypes.STRING,
    area: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: "orifice_sizes",
  });

  return OrificeSize;
};