'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert(
       "toDoLists",
       [
         {
           name: "Shopping",
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           name: "Studies",
           createdAt: new Date(),
          updatedAt: new Date()
         },
         {
           name: "Chores",
           createdAt: new Date(),
          updatedAt: new Date()
         }
       ]
     )
    },
 
    down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("toDoLists", null, {});
  }
};
