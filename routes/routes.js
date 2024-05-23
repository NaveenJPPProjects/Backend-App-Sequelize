// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontrollers');

router.post('/employees', usercontroller.InsertData);
router.get('/fetch',usercontroller.getEmployees)
router.put('/employees/:id', UserController.updateEmployee);
router.delete('/employees/:id', UserController.deleteEmployee);

module.exports = router;