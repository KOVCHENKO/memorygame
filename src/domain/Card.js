export default class Card
{
    constructor(id, value)
    {
        this.id = id;
        this.isOpened = false;
        this.value = value;
    }

    open() {
        this.isOpened = true;
    }

    close() {
        this.isOpened = false;
    }

    hasId(id) {
        return id === this.id;
    }

    is(card) {
        return this.hasId(card.id);
    }

    match(card) {
        return this.value === card.value;
    }
}