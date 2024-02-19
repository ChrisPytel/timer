//"timer1.js A1 - integrated process.argv and created a function for starting timers"

const args = process.argv;
let timerArray = [];

for (let i = 2; i < args.length; i++) { //instead of slicing the first two elements of the array, i just begin the array at 2
  let stringToInteger = parseInt(args[i]); //converts the strings within the array into integers
  stringToInteger = stringToInteger * 1000;
  timerArray.push(stringToInteger);
}
console.log(timerArray);



const timer = function(newTimer, startDelay) {
    for (let index = 0; index < newTimer.length; index++) {
      setTimeout(() => {
        process.stdout.write(`ding at ${newTimer[index]}\n`);
      }, startDelay += newTimer[index]);
    }  
};

timer(timerArray, 0);






//why arent my sys sounds running? hmmm

// function alertTerminal(){
//   process.stdout.write('\x07');
//   process.stdout.write('\u0007');
//   console.log('\x07');
//   console.log('\u0007');
// }

// alertTerminal();