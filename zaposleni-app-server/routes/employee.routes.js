module.exports = app => {
    const employeesController = require("../controllers/employee.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Employee
    router.post("/", employeesController.create);
  
    // Retrieve all Employees
    router.get("/", employeesController.findAll);
  
    // Retrieve a single Employee with id
    router.get("/:id", employeesController.findOne);
  
    // Update a Employee with id
    router.put("/:id", employeesController.update);
  
    // Delete a Employee with id
    router.delete("/:id", employeesController.delete);
  
    app.use('/api/employees', router);
};