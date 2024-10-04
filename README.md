# Magic the Gathering Deck Builder

Project Link: [MTG Deck Builder](https://sba320h-630395ad3e95.herokuapp.com/)

Tech: This project uses React, CSS, HTML and JavaScript.

Explanation: The card data was taken from https://docs.magicthegathering.io/. It was then inserted into a PostgreSQL database hosted on Heroku. A context provider was used to  handle the state of the drag and drop deck builder.

Usage: Set filter options, select and drag card from the master deck into your own deck.

Unsolved problems: 
* Fix query to include all cards/land cards
* add a search by name input, 
* remove duplicate cards from data, 
* improve queries, 
* implement infinite scroll instead of limiting to 1000 cards.
