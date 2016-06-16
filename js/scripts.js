var suits = ["of clubs", "of diamonds", "of spades", "of hearts"];
var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var deckOfCards = [];

ranks.forEach(function(rank) {
  var deck = rank + suits.forEach(function(suit){
    deckOfCards.push(rank + " " + suit);
  });
});

console.log(deckOfCards);
