module.exports = function (sequelize, DataTypes) {

  var FlowCapacityUnit = sequelize.define("FlowCapacityUnit", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    underscored: true,
    createdAt: false,
    tableName: "flow_capacity_units",
  });

  return FlowCapacityUnit;
};
