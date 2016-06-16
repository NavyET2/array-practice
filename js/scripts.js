var suits = ["of clubs", "of diamonds", "of spades", "of hearts"];
var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var deckOfCards = [];

ranks.forEach(function(rank) {
  var deck = rank + suits.forEach(function(suit){
    deckOfCards.push(rank + " " + suit);
  });
});


var deckOfCards2 = [];
for (var rank = 0; rank < ranks.length; rank +=1) {
  for ( var suit = 0; suit < suits.length; suit +=1) {
    deckOfCards2.push(ranks[rank] + " " + suits[suit]);
  }

}

console.log(deckOfCards);
console.log(deckOfCards2);
