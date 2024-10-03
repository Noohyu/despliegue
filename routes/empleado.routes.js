const express = require ('express');
const router = express.Router();
const empleadoCtrl = require ('../controllers/empleado.controller');

router.get('/', empleadoCtrl.getEmployees);
router.post('/', empleadoCtrl.createEmployee);
router.get('/:id', empleadoCtrl.getUniqueEmployeer);
router.put('/:id', empleadoCtrl.editEmployer);
router.delete('/:id', empleadoCtrl.deleteEmployeer);

module.exports = router;