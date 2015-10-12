module.exports = function (sequelize, DataTypes) {

  var PurchaseOrder = sequelize.define("PurchaseOrder", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    file_location : DataTypes.STRING
  }, {
    underscored: true,

    tableName: "purchase_orders",
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

  return PurchaseOrder;
};