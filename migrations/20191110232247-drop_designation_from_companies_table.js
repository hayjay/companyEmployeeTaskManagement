'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.removeColumn(
    'Companies',
    'designation'
   );
  },
  // https://stackoverflow.com/questions/46357533/how-to-add-delete-new-columns-in-sequelize-cli
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.addColumn('Companies', 'designation', Sequelize.STRING)
  }
};
