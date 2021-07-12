const fs = require('fs');
const simpleGit = require('simple-git');
const git = simpleGit();

var gameStatus = {
    since: Date.now() /* since we keep it simple and in-memory, keep track of when this object was created */,
    gamesInitialized: 0 /* number of games initialized */,
    gamesAborted: 0 /* number of games aborted */,
    playersOnline: 0 /*number of current players*/,
    playersWaiting: 0,
    getGamesCompleted: function(){
      return fs.readFileSync("plays.txt");
    },
    increaseGamesCompleted: function(){
      fs.writeFileSync("plays.txt", this.getGamesCompleted() + 1);
    }
  };
  
  module.exports = gameStatus;