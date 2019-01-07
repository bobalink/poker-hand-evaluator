var values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
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

function findDuplicates(valuesArray) {
    let returnValues = {}

    valuesArray.forEach(value => {
        if (Object.keys(returnValues).indexOf(value) === -1) {
            returnValues[value] = 1;
        }
        else {
            returnValues[value] = returnValues[value] + 1
        }
    })

    return returnValues;

}


/**
 * Build and return the value of the hand.
 * @param  {Array} rawArray Array of cards (['Ad', '3c', 'Th', ...]).
 * @return {String} The Value of the hand. ex. "Flush", "High Card Ad"
 */
function solveHand(rawArray) {
    let handType = " ";
    let cardArray = [];
    let suitArray = [];
    let valueArray = [];

    // defines arrays
    rawArray.forEach( (cardString) => {
        const cardObj = new Card(cardString);
        cardArray.push(cardObj);
    });
    suitArray = cardArray.map(card => card.suit)
    valueArray = cardArray.map(card => card.value)

    // find duplicates
    let duplicateValueMap = findDuplicates(valueArray);
    let duplicateSuitMap = findDuplicates(suitArray);
    let pairExists = false;
    let threeOfKindExists = false;
    let isAStraight = false;
    cardArray = cardArray.sort(Card.sort);

    for (const key in duplicateValueMap) {

        switch (duplicateValueMap[key]) {
            case 4:
                handType = HandEnum.FOUR_OF_A_KIND
                break;

            case 3:
                if (pairExists) {
                    handType = HandEnum.FULL_HOUSE
                }
                else {
                    handType = HandEnum.THREE_OF_A_KIND
                }

                threeOfKindExists = true;
                break;

            case 2:

                if (pairExists) {
                    handType = HandEnum.TWO_PAIR
                }
                else if (threeOfKindExists) {
                    handType = HandEnum.FULL_HOUSE
                }
                else {
                    handType = HandEnum.PAIR
                }

                pairExists = true
                break;
        }
    }

    isAStraight = cardArray.every((card, i, cardArray) => {
        console.log(i)
        if (i === 0) return true
        else {
            console.log(card.rank, cardArray[i - 1].rank)
            if (card.rank === cardArray[i - 1].rank + 1) return true;
            else return false;
        }
    } )

    console.log('isAStraight', isAStraight)

    if (Object.keys(duplicateSuitMap).length === 1) {
        handType = HandEnum.FLUSH
    }

    if (handType === ' ') {
        handType = HandEnum.HIGH_CARD + ' ' + cardArray[0];
    }

    console.log(handType)

    return handType
}

module.exports = {
    HandEnum,
    solveHand
};

