module.exports = function (sequelize, DataTypes) {

  var Quote = sequelize.define("Quote", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    file_location : DataTypes.STRING
  }, {
    underscored: true,

    tableName: "quotes",
    classMethods: {
      associate: function(models) {
        Quote.belongsTo(models.Tag, {foreignKey: 'tag_id'});
      }
    }
  });

  return Quote;
};