'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Darian Rushworth",
          email: "darianerrolrushworth@gmail.com",
          phone: 76453,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kristina Matthews",
          email: "kristina2308@gmail.com",
          phone: 45687,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tori Hiedmann",
          email: "toriSFX@gmail.com",
          phone: 29835,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete("users", null, {});
    
  }
};
