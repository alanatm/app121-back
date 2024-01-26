import {config} from 'dotenv';

config();

export const PORT = process.env.PORT;
export const DB_USER = '13linkaajsi4d4o890nn';
export const DB_PASSWORD = 'pscale_pw_LhRtBorVnf2qVdSH3JoFsE7VgbixGc6dLvQmUkA3dhB';
export const DB_HOST = 'aws.connect.psdb.cloud';
export const DB_DATABASE= 'contactcenter121';
export const MYSQL_ATTR_SSL_CA=/etc/ssl/cert.pem;