class Friend {
    constructor(data) {
        this.name = data.name;
        this.photo = data.photo;
        this.scores = data.scores;
    }

    findMatch(friends) {
        let bestMatch = friends[0];
        let minDiff = undefined;

        friends.forEach(friend => {
            let diff = this.compare(friend);
            if (!minDiff || diff < minDiff) {
                bestMatch = friend;
                minDiff = diff;
            }
        });

        return bestMatch;
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