Meteor.publish("items", function() {
    return getItems();
})