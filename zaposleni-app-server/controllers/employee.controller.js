const { employees } = require("../models");
const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;


// Create and Save a new Employee
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.email || !req.body.position || 
        !req.body.salary || !req.body.superior_name) {
        res.status(400).send({
            message: "Required fields can not be empty!"
        });
        return;
    }

    // Create an Employee
    const employee = {
        name: req.body.name,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        address_street: req.body.address_street,
        address_city: req.body.address_city,
        birthday: req.body.birthday,
        position: req.body.position,
        employment_date: req.body.employment_date ? req.body.employment_date : new Date(),
        salary: req.body.salary,
        superior_name: req.body.superior_name,
        superior_position: req.body.superior_position
    };

    // Save Employee in the database
    Employee.create(employee)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while creating the Employee."
            });
        });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
    Employee.findAll()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving employees."
            });
        });
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employee.findByPk(id)
        .then(data => {
            if (data)
                res.status(200).send(data);
            else
                res.status(404).send({
                    message: "Employee not found"
                });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Employee with id=" + id
            });
        });
};

// Update a Employee by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Employee.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Employee was updated successfully."
            });
        } else {
            res.status(404).send({
                message: `Employee not found. Request body can not be empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Employee with id=" + id
        });
    });
};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Employee.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.status(204).send({
                message: "Employee was deleted successfully!"
            });
        } else {
            res.status(404).send({
                message: `Employee not found.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error deleting Employee with id=" + id
        });
    });
};