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