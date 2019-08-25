const Friend = require('./friend');

module.exports = {
    data: [],
    addFriend: data => {
        this.friends.push(new Friend(data));
    }
}