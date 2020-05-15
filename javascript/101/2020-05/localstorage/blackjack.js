// Deal two cards to each player (show player 1 their cards and their card total.
//   - ask the player 1 if they would like another card, or allow player 1 to request another card. (hit)
//   - if player 1 requests a new card, the new card is displayed and a new total is generated
//   - if player 1 takes a new card and player 1 total > 21. Player 1 loses.
//   - once player 1 stands, the computer will decide how many new cards to take.
//   - the computer will decide to take a new card if the player 1 has a greater total that is less than 21


let cards = {
  deck: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
  player1Cards: [],
  player1CardsTotal: 0,
  dealerCards: [],
  dealerCardsTotal: 0,
  busted: 0
  

}

let cardMethod = {
    initialDeal: function () {
      for (let i = 0; i < 2; i++) {
        cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
      }
      this.updatePlayer1Cards();
      
    },

    newGame: function() {
      // clear the DOM
      // initial deal
      if (cards.player1Cards.length === 0) {
        this.initialDeal();
      }else {
        // do nothing at all
      }
      
    },
    
    // Dont forget to add the update player cards method here
    

    totalPlayer1Cards: function () {
      for (let i = 0; i < cards.player1Cards.length; i++) {
        cards.player1CardsTotal += cards.player1Cards[i];

      }

      document.getElementById('player1CardsTotal').innerText = cards.player1CardsTotal;

      if (cards.player1CardsTotal > 21 ) {
        cards.busted = 1;
        setTimeout(function() {alert('Busted! HAHA LOSAH'); }, 100);
        cards.player1Cards = [];

      }else if (cards.player1CardsTotal = 21 ) {
         

      }
      cards.player1CardsTotal = 0;

    },
    player1Hit: function() {

      if (cards.player1Cards.length === 0) {
        // player must hit new game to continue
      } else {
        cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
        this.updatePlayer1Cards();

      }

    },

    updatePlayer1Cards: function() {
      let html = `<ul>`;
      for (let i = 0; i < cards.player1Cards.length; i++) {
        html += `<li>${cards.player1Cards[i]}</li>`

      }
      html += `</ul>`;
      document.getElementById('player1Cards').innerHTML = html;
      this.totalPlayer1Cards();

    },

    player1Stand: function() {
      this.dealerPlayLogic();
    },

    dealerPlayLogic: function () {
    },
      // set timeout function
     setTimeout: function() {
      if (player1CardsTotal == 21) {
        while (dealerCardsTotal <= 21) {

        }
      }
     },

    //dealer gets their cards

    initialDealerCards: function() {
      for (let i = 0; i < 2; i++) {
        cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop())
      }
      // player 1 cards updated 
      this.updatePlayer1Cards();

  },


    totalDealerCards: function() {
      for (let i = 0; i < cards.dealerCards.length; i++) {
        cards.dealerCardsTotal += cards.dealerCards[i];
      }
      document.getElementById('dealerCardsTotal').innerText = cards.dealerCardsTotal;

    },

    };
  //call functions
  cardMethod.initialDeal();




