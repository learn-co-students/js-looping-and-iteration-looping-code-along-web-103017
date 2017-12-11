// Code your solutions in this file
function printBadges(names){
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names
}

function tailsNeverFails(){
  let i = 0;
  let tails = true;
  while (tails) {
    // tails = false
    if (Math.random() < 0.5 ){
      tails = false;
    }else {
      i++;
    }
  }
  return `You got ${i} tails in a row!`
}
