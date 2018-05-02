export default class Game
{
    constructor(cardsCollection) {
        this.cardsCollection = cardsCollection;
    }

    getCards() {
        return this.cardsCollection.getAll();
    }

    openCard(card) {
        if (card.isOpened) return;

        let openedCards = this.cardsCollection.getOpenedCards();

        if(openedCards.count() === 2) {
            openedCards.closeAll();
        }

        this.cardsCollection.open(card.id);

        openedCards = this.cardsCollection.getOpenedCards();

        if(openedCards.count() < 2) {
            return
        }

        if(openedCards.matched()) {
            this.cardsCollection.remove(openedCards);
        }
    }

    isCompleted() {
        return !this.cardsCollection.count();
    }


}