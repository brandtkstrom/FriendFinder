const uuid = require('uuid/v1');

class Friend {
    constructor(data) {
        this.id = uuid();
        this.name = data.name;
        this.photo = data.photo;
        this.scores = data.scores;
    }
    compare(friend) {
        let diff = 0;
        this.scores.forEach((score, i) => {
            diff += Math.abs(score - friend.scores[i]);
        });

        return diff;
    }
}

module.exports = Friend;