const companyController = require('../controllers');

module.exports = function(app) {
    let companyLogic = require('../controllers/company');
    
    //company Routes
    app.route('/api/company')
        //reuising the tasks route for get and post http method
        .post(companyLogic.create);  //calling function list_all_tasks in the controller
        // .post(todoList.create_a_task);



    app.get('/api', (req, res) => res.status(200).send({
        message : 'Welcome to the Todos API!',
    }));

    //company create routes for adding new records
    // app.post('/api/company', companyController.create);
    //end of company controller for adding new records
};