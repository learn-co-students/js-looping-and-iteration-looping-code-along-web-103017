// Code your solutions in this file
function printBadges(emp) {
  i = 0
  for (var i = 0; i < emp.length; i++) {
    console.log(`Welcome ${emp[i]}! You are employee #${i+1}.`)
  }
  return emp
}

function tailsNeverFails() {
  counter = 0
  while (Math.random() >= 0.5) {
    counter ++
  }
  return `You got ${counter} tails in a row!`
}
