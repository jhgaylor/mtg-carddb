# mtg:carddb

This uses the `mtg:json` package to get MTG card data from [the npm mtgjson package](https://github.com/freeall/mtgjson).

It creates a collection on the primary mongo database of the name `mtg_cards` and inserts a document into the collection for every card available via mtgjson.

## MTGCards Methods

These methods are available on the `MTGCards` collection object. They are used to access parts of the `mtg_cards` collection without requiring a lot of boilerplate.

### set(set_name, selector, options)

returns a cursor of MTGCards.

## MTGCard methods

These methods are made available on the documents returned from MTGCards using `dburles:collection-helpers`.

**Usage example**

```js

var card = MTGCards.findOne();
card.isLegal("STANDARD");
```

### isLegal

**Note:** Example. Not yet implemented.

This method takes a format ("STANDARD", "MODERN", "VINTAGE", "COMMANDER") and returns if the card is legal in that format.

Provides methods on the `MTGCards` collection object to access different sets of cards.

Methods are made available on individual card documents using collection helpers.

Uses Collection Helpers, SimpleSchema, Collection2.

May take several minutes to prepare the database on the first run. It inserts ~30k documents.
