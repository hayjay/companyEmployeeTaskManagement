const Company = require('../models').Company;

module.exports = {
    create (req, res) {
        //create a new company
        return Company.create({
                    name : req.body.name
                })
                .then(company => res.status(201).send(company))//if retrived return it
                .catch(error => res.status(400).send(error)); //if failed send error message
    },

    all (req, res) {
        return Company.findAll().then(companies => res.status(201).send(companies))
                .catch(error => res.status(401).send(error));
    }
}