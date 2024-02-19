//"timer1.js A4 - refactored edge case handling, is able to parse floats now instead of integers only"

/* ---------------------------------------------------Edge cases handled--------------------------------------------

All strings from cmd line are converted to numbers "12" => 12  or "4.6" => 4.6
Decimals above 0 are accepted
Integers above 0 are accepted
Does not take in any negative numbers
Does not take in any strings
Does not take in NaN
If no valid numbers are passed in via cmd line, logs a message to console


cmd line examples:                                     order that they call:

node timer1.js 32 1 4 16 2 8                           => 1 2 4 8 16 32
node timer1.js seven 7 5.6 -4 0.4 3.1 -42 potato       => 0.4 3.1 5.6 7 
node timer1.js 5guysBurgersNfries                      => 5             //for some reason this runs, parseFloat is funny
node timer1.js -12 -46 george washington               => error message
node timer1.js                                         => error message
--------------------------------------------------------------------------------------------------------------------*/

const args = process.argv;
const timerArray = [];

for (let i = 2; i < args.length; i++) {         //instead of slicing the first two elements of the args array, i just begin the loop at 2
  let stringToInteger = parseFloat(args[i]);    //converts the strings within the initial array from cmd line into floats
  if (typeof stringToInteger === "number" && stringToInteger >= 0){
    stringToInteger = stringToInteger * 1000;   
    timerArray.push(stringToInteger);  //multiplies them by 1000 to convert from miliseconds to seconds and adds to our array
  }
}

//timer will take in an array of integers, and start a sequence of timers that go off asynchronously 
const timer = function(newTimer) {
  if (newTimer.length === 0){
    console.log(`Error! No array data to create timers from`);
  }
  else{
    console.log(`Timers are set to go off at\n`, timerArray, `\nMiliseconds from now.\n`);
    for (let index = 0; index < newTimer.length; index++) {
      setTimeout(() => {
        console.log(`🔔 Ding Dong 🔔\nTimer went off after ${newTimer[index] / 1000} seconds!\n`);
        process.stdout.write('\x07');      
        process.stdout.write('\u0007');         // Not sure why but I was not able to get
        console.log('\x07');                    // any of these to trigger my system sounds.    
        console.log('\u0007');            
      }, newTimer[index]);
    }
  }
};

timer(timerArray); // Blocking code finished executing