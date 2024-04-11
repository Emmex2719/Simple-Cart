let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 18;
if (runnerAge > 18 && registeredEarly){
raceNumber += 1000 ;
}
//console.log(raceNumber)
if (runnerAge >18 && registeredEarly) {
console.log(`Dear Runner ${raceNumber},Your race will start at 9:30am`);
}
else if(runnerAge > 18 && !registeredEarly){
  console.log(`Dear Runner ${raceNumber},Your race will start at 11:00am`);
}
else if (runnerAge < 18){
console.log(`Dear Youth Runner ${raceNumber}, Your race starts at 12:30pm`)
}
else {
  console.log('See the registration desk')
}