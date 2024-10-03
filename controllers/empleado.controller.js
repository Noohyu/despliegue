const ModelEmpleado = require("../models/empleado");
const empleadoCtrl = {};

//Create
empleadoCtrl.createEmployee =  async (req, res) => {
    const  body = req.body;
    const respuesta = await ModelEmpleado.create(body)
    res.send(respuesta);
}

//Consult
empleadoCtrl.getEmployees = async (req, res)=>{
    const respuesta = await ModelEmpleado.find({})
    res.send(respuesta)
}

//Id consult
empleadoCtrl.getUniqueEmployeer = async (req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findById({_id:id})
    res.send(respuesta)
}


//Update
empleadoCtrl.editEmployer = async (req, res)=>{
    const body = req.body; 
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findByIdAndUpdate({_id:id}, body);
    res.send(respuesta);
}

//Delete
empleadoCtrl.deleteEmployeer = async (req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelEmpleado.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports = empleadoCtrl;