module.exports = function (sequelize, DataTypes) {

  var Tag = sequelize.define("Tag", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    pid: DataTypes.STRING,
    service: DataTypes.STRING,
    line_number: DataTypes.INTEGER,
    status:DataTypes.STRING

  }, {
    underscored: true,
    tableName: "tags",
    classMethods: {
      /**
       * [associate]
       * @description {
       * Associate function used to create inner joins between tables.
       * Inner join linked between 'projects'.
       * Inner join linked between 'user_accesses'
       * Inner join linked between 'tag_calculations'
       * Relationship association: belongsTo('projects')
       * Relationship association: belongsTo('user_accesses')
       * Relationship association: hasOne('tag_calculations')
       * }
       */
      // associate: function(models) {

      // }
    }
  });

  return Tag;
};