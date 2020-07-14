'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "toDoItems", 
      [
        {
          task: "Buy bacon",
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Buy milk",
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Finish sequenzing",
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          task: "Take bins out",
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
