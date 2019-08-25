const path = require('path');
const friends = require('../data/friends');

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        res.set('Content-Type', 'application/json');
        res.status(200).json(friends.data);
    })
    .post('/api/friends', (req, res) => {
        if (!req.body) {
            res.status(500).send('Friend data missing.');
        }
        const data = req.body;
        if (!data.name ||data.name === '') {
            res.status(500).send('Friend name missing.');
        } else if (!data.photo || data.photo === '') {
            res.status(500).send('Friend photo link missing.');
        } else if (!data.scores || !Array.isArray(data.scores)) {
            res.status(500).send('Scores missing!');
        }

        const friend = friends.createFriend(data);
        const match = friends.findMatch(friend);

        if (!match) {
            res.status(404).send('No compatible match found.');
            return;
        }

        res.status(200).json(match);
    });
};