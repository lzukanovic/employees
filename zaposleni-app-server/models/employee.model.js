// Defintion of the sequelize employee model
module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        mobile_number: {
            type: Sequelize.STRING
        },
        address_street: {
            type: Sequelize.STRING
        },
        address_city: {
            type: Sequelize.STRING
        },
        birthday: {
            type: Sequelize.DATEONLY
        },
        position: {
            type: Sequelize.STRING
        },
        employment_date: {
            type: Sequelize.DATEONLY
        },
        salary: {
            type: Sequelize.FLOAT
        },
        superior_name: {
            type: Sequelize.STRING
        },
        superior_position: {
            type: Sequelize.STRING
        }
    });
  
    return Employee;
};