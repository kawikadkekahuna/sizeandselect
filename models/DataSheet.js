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
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * FK to the TAG that generated it
       * }
       */

    }
  });

  return DataSheet;
};