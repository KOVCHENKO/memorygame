<template>
  <div>
    <p>Information: {{ gameMessage }}</p>
    <p>Number of turns: {{ turnCounter }}</p>
    <div class="row">
      <div v-for="card in cards" class="col-md-3 card" @click="openCard(card)" :class="{ isOpened : card.isOpened }">
        <p>Fruit</p>
        <p v-show="card.isOpened">{{ card.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import GameService from '../services/GameService';
import CardsService from "../services/CardsService";

export default {
  name: 'Field',

  created() {
    this.gameService = new GameService();
    this.cardService = new CardsService();

    this.cards = this.gameService.createBunchOfCards();
    this.cards = this.gameService.shuffleCards(this.cards);
  },

  data() {
      return {
        cardService: Object,
        gameService: Object,

        cards: [],

        openedCards: [],
        gameMessage: 'start',
        turnCounter: 0
      }
  },

  methods: {
    openCard(card) {
        this.openedCards.push(card);
        card.isOpened = true;

        if(this.openedCards.length === 2){
           this.gameMessage = this.cardService.checkIfCardsMatch(this.openedCards, this.cards);
           this.nextTurn();
           this.turnCounter++
        }

    },

    nextTurn() {
        setTimeout(this.closeCards, 500);
    },

    closeCards() {
        for (let card of this.cards) {
            card.isOpened = false;
            this.openedCards = [];
        }
    }
  },

  watch: {
      cards() {
          if (this.cards.length === 0) {
              this.gameMessage = 'game is over';
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isOpened {
    background: red
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
