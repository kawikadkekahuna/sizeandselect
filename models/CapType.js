module.exports = function (sequelize, DataTypes) {

  var CapType = sequelize.define("CapType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    letter : DataTypes.STRING,
    description : DataTypes.STRING
  }, {
    underscored: true,

    tableName: "cap_types",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.

       * }
       */

    }
  });

  return CapType;
};