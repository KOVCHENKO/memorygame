export default class CardsService
{
    checkIfCardsMatch(openedCards, cards) {
        if(openedCards[0].value === openedCards[1].value){
            return this.matched(openedCards, cards);
        } else {
            return this.unmatched();
        }
    }

    matched(openedCards, cards) {
        this.removeMatchedCards(openedCards, cards);
        return 'cards match';
    }

    unmatched() {
        return 'cards not match';
    }

    removeMatchedCards(openedCards, cards) {
        setTimeout(() => {
            this.removeSingleCard(openedCards[0], cards);
            this.removeSingleCard(openedCards[1], cards);
        }, 500);
    }

    removeSingleCard(openedCard, cards) {
        let subIndex = cards.map((e) => {
            return e.id;
        }).indexOf(parseInt(openedCard.id));
        cards.splice(subIndex, 1);
    }


}