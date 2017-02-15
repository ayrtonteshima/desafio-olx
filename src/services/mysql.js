import Sequelize from 'sequelize';
import environmentDatabaseConfigs from './../configs/database.json';

const env = process.env.NODE_ENV || 'development';

const config = environmentDatabaseConfigs[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

export default sequelize;