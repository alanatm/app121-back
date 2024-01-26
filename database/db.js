import {Sequelize} from 'sequelize';
import {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    MYSQL_ATTR_SSL_CA
} from '../routes/config.js';

const db = new Sequelize(DB_DATABASE, DB_USER,DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'mysql',
    ssl:MYSQL_ATTR_SSL_CA 
});

export default db;