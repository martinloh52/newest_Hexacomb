const fs = require('fs');
const PLAYS_FILE = "plays.txt";

const simpleGit = require('simple-git')();
const simpleGitPromise = require('simple-git/promise')();

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
      const newVal = String(parseInt(this.getGamesCompleted()) + 1);
      fs.writeFileSync(PLAYS_FILE, newVal);

      const repo = process.env.GITHUB_REPO;
      const username = process.env.GITHUB_USERNAME;
      const secret = process.env.GITHUB_SECRET;
      const email = process.env.GITHUB_EMAIL;

      const gitHubUrl = `https://${username}:${secret}@${repo}`;

      simpleGit.addConfig('user.email', email);
      simpleGit.addConfig('user.name', username);

      simpleGitPromise.addRemote('origin', gitHubUrl);

      simpleGitPromise.add('plays.txt')
      .then(
         (addSuccess) => {
            console.log(addSuccess);
         }, (failedAdd) => {
            console.log('Adding plays.txt failed!');
      });

      simpleGitPromise.commit('Commit number ' + newVal)
      .then(
         (successCommit) => {
           console.log(successCommit);
        }, (failed) => {
           console.log('Failed commit ' + newVal);
        });
      // Finally push to online repository
       simpleGitPromise.push('origin','master')
          .then((success) => {
             console.log('Successfully pushed ' + newVal);
          },(failed)=> {
             console.log('Failed to push ' + newVal);
       });

    }
  };
  
  module.exports = gameStatus;