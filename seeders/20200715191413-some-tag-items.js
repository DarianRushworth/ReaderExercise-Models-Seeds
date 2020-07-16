'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "itemTags", 
      [
        {
          toDoItemId: 1,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          toDoItemId: 1,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          toDoItemId: 2,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("itemTags", null, {});
  }
};
