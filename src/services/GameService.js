import Card from "../domain/Card";

export default class GameService
{
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
    }

    createBunchOfCards() {
        let cards = [];

        cards.push(
            new Card(1, 'apple'),
            new Card(2, 'apple'),
            new Card(3, 'pear'),
            new Card(4, 'pear'),
            new Card(5, 'coconut'),
            new Card(6, 'coconut'),
            new Card(7, 'mango'),
            new Card(8, 'mango'),
            new Card(9, 'orange'),
            new Card(10, 'orange')
        );

        return cards;
    }
}