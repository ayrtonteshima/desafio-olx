import Sequelize from 'sequelize';
import connection from './../services/mysql';

export default connection.define('words', {
  name: Sequelize.STRING
}, {
  timestamps: false
});
