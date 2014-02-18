items = new Meteor.Collection('items');

items.allow({
    insert: function(userId, doc) {
        return true;
    },
    update: function(userId, doc, fields, modifier) {
        return true;
    },
    remove: function(userId, doc) {
        return true;
    }
});

getItems = function() {
    var uid;
    if (Meteor.isClient) {
        uid = Meteor.userId()
    } else if (Meteor.isServer) {
        uid = this.userId; // As per docs I believe this should provide the user logged in
    } else {
        console.log("Meteor is not client or server");
    }


    //console.log("The user is " + uid)
    //if (uid) {
    console.log('uid is something ' + uid);
    return items.find({
        ownerId: uid
    });
    // }

};