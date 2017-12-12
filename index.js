// Code your solutions in this file
function printBadges(array) {
  // const newArray = []
  for(let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${[i + 1]}.`)
  }
  return array
}


function tailsNeverFails() {
  function tails() {
    return Math.random() >= 0.5
  }

  let flips = 0
  let message = ''

  while (tails()) {
    flips += 1
    message = `You got ${flips} tails in a row!`
  }
  return message
}
