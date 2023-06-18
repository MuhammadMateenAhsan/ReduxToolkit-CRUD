const express = require('express');
const {addemployee , getAllEmployees , getEmployeeByID , deleteEmployeeByID , updateEmployee} = require("../controllers/allControllers")

const router = express.Router()
router.route("/").post(addemployee).get(getAllEmployees)
router.route("/:id").get(getEmployeeByID).delete(deleteEmployeeByID).put(updateEmployee)

module.exports=router