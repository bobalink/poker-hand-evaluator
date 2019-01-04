var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
var HandEnum = {
    ROYAL_FLUSH: 'Royal Flush',
    STRAIGHT_FLUSH: 'Straight flush',
    FOUR_OF_A_KIND:'Four of a kind',
    FULL_HOUSE:'Full house',
    FLUSH: 'Flush',
    STRAIGHT: 'Straight',
    THREE_OF_A_KIND: 'Three of a kind',
    TWO_PAIR: 'Two pair',
    PAIR: 'Pair',
    HIGH_CARD: 'High Card'
};
/**
 * Base Card class that defines a single card.
 */
class Card {
    constructor(str) {
        this.value = str.substr(0, 1);
        this.suit = str.substr(1, 1).toLowerCase();
        this.rank = values.indexOf(this.value);
    }

    toString() {
        return this.value + this.suit;
    }

    static sort(a, b) {
        if (a.rank > b.rank) {
            return -1;
        } else if (a.rank < b.rank) {
            return 1;
        } else {
            return 0;
        }
    }
}


/**
 * Build and return the value of the hand.
 * @param  {Array} rawArray Array of cards (['Ad', '3c', 'Th', ...]).
 * @return {String} The Value of the hand. ex. "Flush", "High Card Ad"
 */
function solveHand(rawArray) {
    let handType = " ";
    let cardArray = [];

    rawArray.forEach( (cardString)=> {
        const cardObj = new Card(cardString);
        cardArray.push(cardObj);
    });

    cardArray = cardArray.sort(Card.sort);

    handType = HandEnum.HIGH_CARD + ' ' +  cardArray[0];

    return handType
}

module.exports = {
    HandEnum,
    solveHand
};

