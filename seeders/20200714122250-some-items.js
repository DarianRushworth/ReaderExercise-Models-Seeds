'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "toDoItems", 
      [
        {
          task: "Buy bacon",
          todoListId: 1,
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Buy milk",
          todoListId: 1,
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Finish sequenzing",
          todoListId: 2,
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Take bins out",
          todoListId: 3,
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
