const fs = require('fs');
var gameStatus = {
    since: Date.now() /* since we keep it simple and in-memory, keep track of when this object was created */,
    gamesInitialized: 0 /* number of games initialized */,
    gamesAborted: 0 /* number of games aborted */,
    playersOnline: 0 /*number of current players*/,
    gamesCompleted: function() {
      return fs.readFile('plays.txt', 'utf-8', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })
    },
    playersWaiting: 0
  };
  
  module.exports = gameStatus;