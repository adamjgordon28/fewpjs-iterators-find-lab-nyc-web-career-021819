const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winGame = array.find (game => game.result === "W")
  if (winGame) {
    return winGame.year
  }
}
