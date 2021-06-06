let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const age = '22'

if (age > 18 && registeredEarly === true){
  raceNumber += 1000;
} else {
  // do nothing
}

if (age > 18 && registeredEarly === true){
  console.log(`Your race number is ${raceNumber}! Your race will begin at 9:30am. Good Luck!`)
} else if (age > 18 && registeredEarly !== true){
  console.log(`Your race number is ${raceNumber}! Your race will begin at 11:00am. Good Luck!`)
} else if (age < 18){
  console.log(`Your race number is ${raceNumber}! Your race will begin at 12:30am. Good Luck!`)
} else {
  console.log('Please see the registration desk')
}