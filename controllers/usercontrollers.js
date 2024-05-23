// controllers/UserController.js
const Employees = require('../models/usermodels');


exports.getEmployees = async (req, res) => {
    try {
        // Fetch all employees from the database
        const employees = await Employees.findAll();
        res.json(employees);
    } catch (error) {
        console.error('Error fetching employees:', error); // Log the error for debugging
        res.status(500).json({ error: 'Error fetching employees' }); // Return a generic error message
    }
};


exports.InsertData = async (req, res) => {
    try {
        const employees = await Employees.create(req.body);
        res.json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;

        const employee = await Employees.findByPk(id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        await employee.update({ username, email, password });

        res.json(employee);
    } catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ error: 'Error updating employee' });
    }
};


exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await Employees.findByPk(id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        await employee.destroy();

        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ error: 'Error deleting employee' });
    }
};