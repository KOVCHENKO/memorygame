<template>
  <div>
    <p v-if="game.isCompleted()">Game is completed</p>

    <p>Number of turns: {{ turnCounter }}</p>
    <div class="row">
      <div v-for="card in game.getCards()" class="col-md-3 card" @click="openCard(card)" :class="{ isOpened : card.isOpened }">
        <p>Fruit</p>
        <!--<p v-show="card.isOpened">{{ card.value }}</p>-->
        <p>{{ card.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import GameService from '../services/GameService';
import CardsService from "../services/CardsService"; //
import CardsCollection from '../domain/CardsCollection';
import Game from '../domain/Game';

export default {
  name: 'Field',

  created() {
    this.gameService = new GameService();
    this.cardService = new CardsService();

    let cards = this.gameService.createBunchOfCards();
    cards = this.gameService.shuffleCards(cards);

    this.game = new Game(new CardsCollection(cards));

  },

  data() {
      return {
        game: Object,
        turnCounter: 0
      }
  },

  methods: {
    openCard(card) {
        this.game.openCard(card);
    }
  },
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
