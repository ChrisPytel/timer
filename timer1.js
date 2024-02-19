//"timer1.js A3 - timerArray is now pre-emptively filtered prior for edge cases to passing into our timer function"

const args = process.argv;
const timerArray = [];

for (let i = 2; i < args.length; i++) {       //instead of slicing the first two elements of the args array, i just begin the loop at 2
  let stringToInteger = parseInt(args[i]);    //converts the strings within the initial array from cmd line into integers
  if (typeof stringToInteger === "number" && stringToInteger >= 0){
    stringToInteger = stringToInteger * 1000;   //multiplies them by 1000 to convert from miliseconds to seconds  
    timerArray.push(stringToInteger);           //pushes them to our timerArray
  }
}

console.log(`Timers are set to go off at\n`, timerArray, `\nMiliseconds from now.`);

//timer will take in an array of integers, and start a sequence of timers that go off asynchronously 
const timer = function(newTimer) {
  for (let index = 0; index < newTimer.length; index++) {
    setTimeout(() => {
      process.stdout.write(`🔔 Ding Dong 🔔\nTimer went off at ${newTimer[index] / 1000} seconds!\n`);
      process.stdout.write('\x07');      
      process.stdout.write('\u0007');
      console.log('\x07');              //Not sure why
      console.log('\u0007');            //Was not able to get any of these to trigger my system sounds.
    }, newTimer[index]);
  }
};

timer(timerArray);
console.log(`Blocking code finished executing\n`); //kept in for testing purposes