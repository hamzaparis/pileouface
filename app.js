const Player = require('./player');
const Game = require('./game');

// import Player from './Player';
// import Game from './Game';

const player1 = new Player('timal');
const player2 = new Player('breton');

const game = new Game(player1, player2, 5);
game.play();