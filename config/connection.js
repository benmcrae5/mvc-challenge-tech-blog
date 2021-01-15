require('dotenv').config();

const Seq = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Seq(process.env.JAWSDB_URL)
  : new Seq({
      database: process.env.DB_NAME, 
      username: process.env.DB_USER, 
      password: process.env.DB_PW, 
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
