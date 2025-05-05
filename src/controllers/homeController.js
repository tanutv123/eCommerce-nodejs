const connection = require('../config/database');

const getHomepage = (req, res) => {
    let user = []
    connection.query('SELECT * FROM Users', (err, results) => {
        if (err) throw err;
        user = results;
        res.send(JSON.stringify(user));
    });
}

const getSamplePage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getSamplePage
}