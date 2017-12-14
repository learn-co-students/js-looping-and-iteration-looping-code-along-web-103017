// Code your solutions in this file
function printBadges(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(`Welcome ${input[i]}! You are employee #${i + 1}.`)
  }
  return input
}


function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let counter = 0
  while (maybeTrue() === true){
    counter++
  }
  return `You got ${counter} tails in a row!`
}
