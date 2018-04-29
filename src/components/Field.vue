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
export default {
  name: 'Field',

  created() {
    this.shuffleCards(this.cards);
  },

  data() {
      return {
        cards : [
            {
                id: 1,
                isOpened: false,
                value: 'apple'
            },
            {
                id: 2,
                isOpened: false,
                value: 'orange'
            },
            {
                id: 3,
                isOpened: false,
                value: 'plum'
            },
            {
                id: 4,
                isOpened: false,
                value: 'apple'
            },
            {
                id: 5,
                isOpened: false,
                value: 'orange'
            },
            {
                id: 6,
                isOpened: false,
                value: 'plum'
            }
        ],

        openedCards: [],
        gameMessage: 'gameMessage',
        turnCounter: 0
      }
  },

  methods: {
    shuffleCards(cards) {
        let currentIndex = cards.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
        }
        return cards;
    },

    openCard(card) {
        this.openedCards.push(card);
        card.isOpened = true;

        if(this.openedCards.length === 2){
            this.checkIfCardsMatch();
        }
    },

    checkIfCardsMatch() {
        if(this.openedCards[0].value === this.openedCards[1].value){
            this.matched();
        } else {
            this.unmatched();
        }

        this.turnCounter++
    },

    matched() {
      this.gameMessage = 'cards match';
      setTimeout(this.removeMatchedCards, 1000);
      this.nextTurn();
    },

    unmatched() {
      this.gameMessage = 'cards not match';
      this.nextTurn();
    },

    nextTurn() {
        setTimeout(this.closeCards, 1000);
    },

    closeCards() {
        for (let card of this.cards) {
            card.isOpened = false;
            this.openedCards = [];
        }
    },

    removeMatchedCards() {
        let subIndex = this.cards.map((e) => {
            return e.id;
        }).indexOf(parseInt(this.openedCards[0].id));
        this.cards.splice(subIndex, 1);

        let subIndex2 = this.cards.map((e) => {
            return e.id;
        }).indexOf(parseInt(this.openedCards[1].id));
        this.cards.splice(subIndex2, 1);

        this.closeCards();
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
