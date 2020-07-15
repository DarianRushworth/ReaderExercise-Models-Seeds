'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "toDoItems", 
      [
        {
          task: "Buy bacon",
          toDoListId: 1,
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Buy milk",
          toDoListId: 1,
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Finish sequenzing",
          toDoListId: 2,
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Take bins out",
          toDoListId: 3,
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("toDoItems", null, {});
  }
};
