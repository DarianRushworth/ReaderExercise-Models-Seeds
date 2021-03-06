'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class toDoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      toDoItem.belongsTo(models.toDoList)
      toDoItem.belongsToMany(models.tag, {
        through: "itemTags",
        foreignKey: "toDoItemId"
      })
    }
  };
  toDoItem.init({
    task: DataTypes.TEXT,
    deadline: DataTypes.DATE,
    important: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'toDoItem',
  });
  return toDoItem;
};