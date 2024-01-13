require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: "15432",
    database: process.env.DB_NAME,
    username: process.env.DB_UNAME,
    password: "doquevocetemfome21012106",
    define: {
        timestamps: true,
        underscored: true
    }
};