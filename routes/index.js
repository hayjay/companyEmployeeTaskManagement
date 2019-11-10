const companyController = require('../controllers'.company);

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message : 'Welcome to the Todos API!',
    }));

    //company create routes for adding new records
    app.post('/api/company', companyController.create);
    //end of company controller for adding new records
};