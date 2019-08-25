const Friend = require('./friend');

module.exports = {
    data: [],
    createFriend: function(friendData) {
        const newFriend = new Friend(friendData);
        this.data.push(newFriend);
        return newFriend;
    },
    findMatch: function(friend) {
        let bestMatch = undefined;
        let minDiff = undefined;

        for (let i=0; i < this.data.length; i++) {
            const tmpFriend = this.data[i];
            if (tmpFriend.id === friend.id) {
                continue;
            }

            let diff = friend.compare(tmpFriend);
            if (!minDiff || diff < minDiff) {
                bestMatch = tmpFriend;
                minDiff = diff;
            }
        }

        return bestMatch;
    }
}