require('should');
var pokerSolver = require('../pokerSolver.js');

describe('A basic hand', function() {
    it('should find the high card', function() {
        var hand = pokerSolver.solveHand(['Kh', 'Tc', '5d', 'As', '3c']);
        hand.should.equal('High Card As');
    });



});