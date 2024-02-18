//"timer1.js created - "



//why arent my sys sounds running? hmmm

function alertTerminal(){
  process.stdout.write('\x07');
  console.log('\u0007');
  process.stdout.write('\u0007');
}

alertTerminal();