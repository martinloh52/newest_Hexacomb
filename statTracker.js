const fs = require('fs');
const PLAYS_FILE = "plays.txt";

var gameStatus = {
    since: Date.now() /* since we keep it simple and in-memory, keep track of when this object was created */,
    gamesInitialized: 0 /* number of games initialized */,
    gamesAborted: 0 /* number of games aborted */,
    playersOnline: 0 /*number of current players*/,
    playersWaiting: 0,
    getGamesCompleted: function(){
      return fs.readFileSync(PLAYS_FILE);
    },
    increaseGamesCompleted: function(){
      fs.writeFileSync(PLAYS_FILE, String(parseInt(this.getGamesCompleted()) + 1));
    }
  };
  
  module.exports = gameStatus;