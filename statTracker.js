const fs = require('fs');

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
      fs.writeFileSync("plays.txt", String(parseInt(this.getGamesCompleted()) + 1));

      const USER = process.env.GITHUB_USERNAME;
      const PASS = process.env.GITHUB_USERNAME;
      const REPO = process.env.GITHUB_REPO;

      const git = require('simple-git');
      const remote = `https://${USER}:${PASS}@${REPO}`;

      await git().silent(true)
        .add("plays.txt")
        .commit("heeheehoohoo, here i go committing the statistics again")
        .push(remote, 'origin/master');
      }
  };
  
  module.exports = gameStatus;