Meteor.subscribe("items");

Template.items.item = function() {
    return getItems();
};

Template.addItem.events({

    'click #add': function(evt, tmpl) {
        var user = Meteor.user();
        if (!user) {
            alert("you need to be logged in.");
            return;
        }

        var name = tmpl.find("#name").value

        items.insert({
            "name": name,
            ownerId: Meteor.userId(),
            creationDate: new Date()
        }, function(err, result) {
            if (err) {
                console.log("Error inserting " + err.message);
            }
        });
    }
});