'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert(
       "toDoLists",
       [
         {
           name: "Shopping",
           userId: 1,
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           name: "Studies",
           userId: 3,
           createdAt: new Date(),
          updatedAt: new Date()
         },
         {
           name: "Chores",
           userId: 2,
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
