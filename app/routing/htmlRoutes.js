const path = require('path');

module.exports = app => {
    app.get('/', (req,res) => {
        res.set('Content-Type', 'text/html');
        res.status(200).sendFile('home.html', {root: path.join(__dirname, '../public')});
    })
    .get('/survey', (req,res) => {
        res.set('Content-Type', 'text/html');
        res.status(200).sendFile('survey.html', {root: path.join(__dirname, '../public')});
    });
};