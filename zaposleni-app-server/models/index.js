const dbConfig = require("../config/db.config.js");
const mysql2 = require('mysql2');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        dialectModule: mysql2,
        port: dbConfig.PORT,
        // operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// the sequelize model represents the employees table in mysql database
db.employees = require("./employee.model.js")(sequelize, Sequelize);

module.exports = db;