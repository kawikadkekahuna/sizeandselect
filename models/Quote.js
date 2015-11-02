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
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * FK to the TAG that generated it
       * }
       */

    }
  });

  return Quote;
};