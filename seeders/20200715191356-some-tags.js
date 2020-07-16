'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
    "tags", 
      [
        {
          title: "Streaky, not diced",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Fresh fullcream",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Learn relations",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("tags", null, {});
  }
};
