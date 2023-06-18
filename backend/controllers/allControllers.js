const employeeModel=require('../models/employeeModel')

// function start to POST data to DB
const addemployee = async(req,res)=>{
    try {
        const employee=await employeeModel(req.body)
        const data=await employee.save()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
// function end to POST data to DB

// function start to GET data from DB

const getAllEmployees = async(req,res)=>{
    try {
        const data = await employeeModel.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
}

// function end to GET data from DB

// function start to GET data from DB by ID

const getEmployeeByID = async(req,res)=>{

    try {
        const data = await employeeModel.findById(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
}

// function end to GET data from DB by ID

// function start to delete data from DB by ID

const deleteEmployeeByID = async (req,res)=>{
    try {
        const data = await employeeModel.findByIdAndDelete(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
}

// function end to delete data from DB by ID

//   update activity
const updateEmployee = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
  
    try {
      const updateemployee = await employeeModel.findOneAndUpdate({ _id: id }, update, { new: true });
      res.json(updateemployee);
    } catch (error) {
      console.log("error in update ", error);
      res.sendStatus(500);
    }
  };

module.exports={addemployee , getAllEmployees , getEmployeeByID , deleteEmployeeByID , updateEmployee}