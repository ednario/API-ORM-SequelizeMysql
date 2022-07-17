module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Pessoas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Pessoas', 'deletedAt');
  },
};
