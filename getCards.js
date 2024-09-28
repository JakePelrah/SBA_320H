const mtg = require('mtgsdk')

// Get all cards
mtg.card.all()
.on('data', function (card) {
  console.log(card.name)
});

// Filter Cards
mtg.card.all({ supertypes: 'legendary', types: 'creature', colors: 'red,white' })
.on('data', function (card) {
    console.log(card.name)
});

// Get cards on a specific page / pageSize
mtg.card.where({ page: 50, pageSize: 50})
.then(cards => {
    console.log(cards[0].name)
})