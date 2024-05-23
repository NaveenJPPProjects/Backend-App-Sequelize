// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Employees = sequelize.define('Employees', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


(async () => {
    try {
        await Employees.sync({ force: false });
        console.log('Employees table created successfully.');
    } catch (error) {
        console.error('Error creating employee table:', error);
    }
})();


module.exports = Employees;
