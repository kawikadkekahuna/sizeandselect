module.exports = function (sequelize, DataTypes) {

  var FlangeRating = sequelize.define("FlangeRating", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rating: DataTypes.STRING
  }, {
    underscored: true,
    tableName: "flange_ratings",
  });

  return FlangeRating;
};