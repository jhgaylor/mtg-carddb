// Make the DB from MTGjson
var processMTGData = Meteor.bindEnvironment(function (err, sets) {
  if (err) {
    return console.log(err);
  }
  var set_names = Object.keys(sets);

  console.log("Begin preparing database. This may take several minutes.");

  var progressAlerterHandle = Meteor.setInterval(function () {
    console.log("Still preparing database. Please wait.")
  }, 20000);

  set_names.forEach(function (set_name) {
    var set = sets[set_name];
    set.cards.forEach(function (card, i) {
      card.set = set_name;
      // TODO: this creation mechanism depends on the model layer
      MTGCards.insert(card, _.noop);
    });
  });
  console.log("Done preparing database.");
  Meteor.clearInterval(progressAlerterHandle);
});

function createMTGCardDB () {
  MTGjson(processMTGData);
}

// Only create the MTGCards if there are no cards in the db already
if (MTGCards.find().count() === 0) {
  createMTGCardDB();
}