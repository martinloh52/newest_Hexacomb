var gameStatus = {
    since: Date.now() /* since we keep it simple and in-memory, keep track of when this object was created */,
    gamesInitialized: 0 /* number of games initialized */,
    gamesAborted: 0 /* number of games aborted */,
    playersOnline: 0 /*number of current players*/,
    gamesCompleted: 0 /* number of games successfully completed */
  };
  
  module.exports = gameStatus;