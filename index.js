var pokerSolver = require('./pokerSolver');


const handsToBeEvaluated = [
    [ 'Th', 'Jh', 'Qh', 'Kh', '9h' ], //'Straight flush'
    [ 'Th', 'Jh', 'Js', 'Jd', 'Jc' ], // 'Four of a kind'
    [ 'Th', 'Jh', 'Js', 'Jd', 'Tc' ], // 'Full house'
    [ '8h', 'Jh', 'Qh', 'Kh', '9h' ], // 'Flush'
    [ 'Th', 'Jh', 'Qh', 'Kh', 'As' ], // 'Straight'
    [ 'As', '2h', '3d', '4h', '5c' ], // 'Straight'
    [ 'Th', 'Jh', 'Js', 'Jd', '9c' ], // 'Three of a kind'
    [ 'Th', 'Jh', 'Js', '9d', '9c' ], // 'Two pair'
    [ 'Th', 'Jh', '2s', '9d', '9c' ], // 'Pair'
    [ 'Th', 'Jh', '2s', 'Ad', '9c' ], // 'High Card'
    [ 'Th', '2h', '2s', '5d', '9c' ], // 'High Card'
];


handsToBeEvaluated.forEach(hand => {
    const result = pokerSolver.solveHand(hand);
    console.log(hand, 'is a ', result);
});