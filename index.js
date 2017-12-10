// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails() {

  function maybeTrue () {
    return Math.random() >= 0.5;
  }

  let tails = maybeTrue();
  let count = 0;
  while (tails) {
    count++;
    tails = maybeTrue();
  }

  return `You got ${count} tails in a row!`
}
