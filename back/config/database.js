import { Sequelize } from 'sequelize';
 
const db = new Sequelize('crud_back', 'root', 'usbw', {
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
