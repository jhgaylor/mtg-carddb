MTGCardSchema = new SimpleSchema({
  set: {
    type: String
  },
  layout: {
    type: String
  },
  type: {
    type: String,
    defaultValue: null,
    optional: true
  },
  types: {
    type: [String],
    defaultValue: [],
    optional: true
  },
  colors: {
    type: [String],
    defaultValue: [],
    optional: true
  },
  multiverseid: {
    type: String,
    defaultValue: null,
    optional: true
  },
  name: {
    type: String
  },
  subtypes: {
    type: [String],
    defaultValue: [],
    optional: true
  },
  cmc: {
    type: String,
    defaultValue: null,
    optional: true
  },
  rarity: {
    type: String
  },
  artist: {
    type: String
  },
  power: {
    type: String,
    defaultValue: null,
    optional: true
  },
  toughness: {
    type: String,
    defaultValue: null,
    optional: true
  },
  manaCost: {
    type: String,
    label: "Mana Cost",
    defaultValue: null,
    optional: true
  },
  text: {
    type: String,
    defaultValue: "",
    optional: true
  },
  number: {
    type: String,
    defaultValue: null,
    optional: true
  },
  imageName: {
    type: String,
    label: "Image Name"
  },
  id: {
    type: String,
    label: "ID"
  }
});

MTGCards = new Mongo.Collection('mtg_cards');

MTGCards.attachSchema(MTGCardSchema);

MTGCards.helpers({

});
