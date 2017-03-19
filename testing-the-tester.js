// this is where you will write your javascript code

  grid = [null,null,null,null,null,null,null,null]
  player = 1
  win = [
    [0, 1, 2], // horizontal win 1
    [3, 4, 5], // horizontal win 2
    [6, 7, 8], // horizontal win 3
    [0, 3, 6], // vertical win 1
    [1, 4, 7], // vertical win 2
    [2, 5, 8], // vertical win 3
    [0, 4, 8], // diagonal win 1
    [2, 4, 6] // diagonal win 2
]

function restart() {
  grid = [null,null,null,null,null,null,null,null]
  player = 1
}

function isGameOver() {
  var winStates = [1, 2, 3]
  if (winStates.includes(this.whoWon())) {
    return true
  } else {
    return false
  }
}

function whoWon() {
//filtering the grid into each player's moves e.g. P1 = [1,5,6], P2 = [1,3,4]
  var filteredP1 = grid.filter(function(num){ if( num % 2 ) return num;})
  var filteredP2 = grid.filter(function(num){ if( num % 2 == 0) return num;})
// a loopey loop to check for various win arrays
    for (var i = 0; i < win.length ; i++) {
//clearing out the numbers that 'won' after each win array check
      var strikesP1 = []
      var strikesP2 = []
      for (var j = 0; j < win[i].length ; j++) {
// another loopey loop to check for the individual elements in the win arrays
        if (filteredP1.includes(win[i][j])) {
          strikesP1.push(win[i][j])
          if (strikesP1.length === 3 && this.player === 1) {
            console.log("Player 1 Won!!!")
            return 1
          }
        else if (filteredP2.includes(win[i][j])) {
          strikesP2.push(win[i][j])
          if (strikesP2.length === 3 && this.player === 2) {
            console.log("Player 2 Won!!!")
            return 2
          }
        }
        }
        if (grid.length === 9) {
          console.log("We have a draw!!!")
          return 3
        }
      }
    }
  return 0
}

function playTurn(index) {
  // if the game is not over and the space is empty
  if (!this.isGameOver() && this.grid[index] === null) {
       if (this.player === 1) {
         //check for player, if 1 then player is 2
         this.grid[index] = 'X'
       } else {
         this.grid[index] = 'O'
       }
       return true
     } else {
       return false
     }
}
