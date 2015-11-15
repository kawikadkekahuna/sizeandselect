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
      associate: function(models) {
        PurchaseOrder.belongsTo(models.Tag, {foreignKey: 'tag_id'});
      }
    }
  });

  return PurchaseOrder;
};