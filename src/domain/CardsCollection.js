export default class CardsCollection
{
    constructor(cards) {
        this.cards = cards;
    }

    getAll() {
        return this.cards;
    }

    open(cardId) {
       let card = this.cards.find(card => card.hasId(cardId));
       card.open();
    }

    getOpenedCards() {
        let cards = this.cards.filter(card => card.isOpened);
        return new CardsCollection(cards);
    }

    count() {
        return this.cards.length;
    }

    matched() {
        const cards = [...this.cards];
        const currentCard = cards.shift();

        for (let card of this.cards) {
            if(!currentCard.match(card)) {
                return false;
            }
        }

        return true;
    }

    remove(removedCards) {
        this.cards = this.cards.filter(card => !removedCards.getAll().find(removedCard => removedCard.is(card)));
    }

    closeAll() {
        this.cards.forEach(card => card.close());
    }

}