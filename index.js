function printBadges(arr){
  for (let i = 0; i < arr.length; i++){
    employee = arr[i];
    console.log(`Welcome ${employee}! You are employee #${i + 1}.`);
  }
  return arr;
}

function tailsNeverFails(){
  counter = 0
  while (Math.random() >= 0.5) {
    counter++
  }
  return `You got ${counter} tails in a row!`
}
