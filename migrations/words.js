module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('words', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: false
    });
  },
  down: function (queryInterface) {
    return queryInterface.dropTable('words');
  }
};