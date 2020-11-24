const express = require('express');
const bodyParser = require("body-parser");
// const cors = require("cors");
const jsonData = require('./zaposleni-app-server/data/employees-data.json');

const db = require('./zaposleni-app-server/models');
// In development, you may need to drop existing tables and re-sync database
db.sequelize.sync({ force: true })
.then(() => {
    console.log("Drop and re-sync db.");
})
.then(() => {
    db.employees.bulkCreate(jsonData);
});

const app = express();

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// angular built static files
app.use(express.static(process.cwd()+"/zaposleni-app-ui/dist/zaposleni-app-ui/"));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.get('/', (req, res) => {
	res.sendFile(process.cwd()+"/zaposleni-app-ui/dist/zaposleni-app-ui/index.html")
});
require('./zaposleni-app-server/routes/employee.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on the port::${PORT}`);
});