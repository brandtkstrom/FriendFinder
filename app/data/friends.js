const Friend = require('./friend');

module.exports = {
    data: [],
    createFriend: data => {
        const newFriend = new Friend(data);
        this.data.push(newFriend);
        return newFriend;
    },
    findMatch: friend => {
        let bestMatch = undefined;
        let minDiff = undefined;

        this.data.forEach(f => {
            let diff = friend.compare(f);
            if (!minDiff || diff < minDiff) {
                bestMatch = f;
                minDiff = diff;
            }
        });

        return bestMatch;
    }
}