require ('dotenv').config ();

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV ||'root',
    password: process.env.DB_USERNAME_DEV ||'root',
    database: 'mineral_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  test: {
    username: process.env.DB_USERNAME_DEV || 'root',
    password: process.env.DB_USERNAME_DEV || 'root',
    database: 'mineral_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    username: 'root',
    password: null,
    database: 'mineral_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  }
};
