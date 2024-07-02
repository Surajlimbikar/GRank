require("dotenv").config();

const config = {
  mysqlConfig: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "myvidyaco_grank_db",
    password: process.env.MYSQL_PASSWORD || "{{VVzvel7JyG",
    database: process.env.MYSQL_DATABASE || "myvidyaco_grank_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
};

module.exports = config;
