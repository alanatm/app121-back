import {Sequelize} from 'sequelize';
import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} from '../routes/config.js';

const db = new Sequelize(DB_DATABASE, DB_USER,DB_PASSWORD,{
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql'
    
});

export default db;