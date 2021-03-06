(function(exports) {
    /*
     * Client to server: game is complete, the winner is ...
     */
    exports.T_GAME_WON_BY = "GAME-WON-BY";
    exports.O_GAME_WON_BY = {
      type: exports.T_GAME_WON_BY,
      data: null
    };
  
    /*
     * Server to client: abort game (e.g. if second player exited the game)
     */
    exports.T_GAME_ABORTED = "GAME-ABORTED";
    exports.O_GAME_ABORTED = {
      type: exports.T_GAME_ABORTED
    };
    exports.S_GAME_ABORTED = JSON.stringify(exports.O_GAME_ABORTED);
  
    /*
     * Server to client: set as player A
     */
    exports.T_PLAYER_TYPE = "PLAYER-TYPE";
    exports.O_PLAYER_A = {
      type: exports.T_PLAYER_TYPE,
      data: "A"
    };
    exports.S_PLAYER_A = JSON.stringify(exports.O_PLAYER_A);
  
    /*
     * Server to client: set as player B
     */
    exports.O_PLAYER_B = {
      type: exports.T_PLAYER_TYPE,
      data: "B"
    };
    exports.S_PLAYER_B = JSON.stringify(exports.O_PLAYER_B);
  
    /**
     * Server to both clients: the game can now start
     */

    exports.T_BOTH_READY = "BOTH-READY";
    exports.O_BOTH_READY = {
        type: exports.T_BOTH_READY
    };
    exports.S_BOTH_READY = JSON.stringify(exports.O_BOTH_READY);
    
    /*
     * Client to server: placed a stone
    */
    exports.T_STONE_PLACED = "STONE-PLACED";
    exports.O_STONE_PLACED = {
        type: exports.T_STONE_PLACED,
        data: null,
        position: null
    };
    exports.S_STONE_PLACED = JSON.stringify(exports.O_STONE_PLACED);

    /*
     * Server to Player A & B: game over with result won/loss
     */
    exports.T_GAME_OVER = "GAME-OVER";
    exports.O_GAME_OVER = {
      type: exports.T_GAME_OVER,
      data: null
    };
})(typeof exports === "undefined" ? (this.Messages = {}) : exports);
  //if exports is undefined, we are on the client; else the server