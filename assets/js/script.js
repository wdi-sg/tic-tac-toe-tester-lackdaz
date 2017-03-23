$(document).ready(function() {

  var ttt = {
    // declare variables
    grid: [],
    player: 1,
    gameState: 0,
    WIN: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ],

    makeGrid: function(size) {
      this.grid = []
      for (var i = 0; i < Math.pow(size, 2); i++) {
        this.grid.push('')
      }
      return this.grid
    },

    playTurn: function(index) {
      var $grid = $('body').find('.box')
      if (!this.isGameOver() && this.grid[index] === '') {
        if (this.player === 1) {
          this.grid[index] = 'X'
          $grid[index].textContent = 'X'
          // player = 2
        } else {
          this.grid[index] = 'O'
          $grid[index].textContent = 'O'
          // player = 1
        }
        return true
      } else {
        return false
      }
    },

    isGameOver: function() {
      var gameOverStates = [1, 2, 3]
      if (gameOverStates.includes(this.whoWon())) {
        return true
      } else {
        return false
      }
    },

    whoWon: function() {
      for (var i = 0; i < this.WIN.length; i++) {
        if (((this.grid[this.WIN[i][0]] === this.grid[this.WIN[i][1]]) && (this.grid[this.WIN[i][1]] === this.grid[this.WIN[i][2]]))) {
          if (![this.grid[this.WIN[i][0]], this.grid[this.WIN[i][1]], this.grid[this.WIN[i][2]]].includes('')) {
            if (this.grid[this.WIN[i][0]] === 'X') {
              this.gameState = 1
              alert('Game over! Player 1 won')
              return 1
            } else if (this.grid[this.WIN[i][0]] === 'O') {
              this.gameState = 2
              alert('Game over! Player 2 won')
              return 2
            }
          }
        }
      }
      if (!this.grid.includes('')) {
        this.gameState = 3
        alert('It\'s a tie')
        return 3
      } else {
        this.gameState = 0
        return 0
      }
    },

    restart: function() {
      this.makeGrid(3)
      this.gameState = 0
      this.player = 1
    }

  }

  ttt.makeGrid(3)

  $('.box').on('click', function(){
    var index = $('.box').index(this)
    console.log(index)
    ttt.playTurn(index)
  })

})
