console.log("kata1:")
function oneThroughTwenty() {
  let num = 1;
    while (num <=20){
      console.log(num);
      num++;
  }
}
oneThroughTwenty();

console.log(".......................................")
console.log("kata2:")
function evensToTwenty() {
  for (let num = 2; num <= 20; num +=2)
    console.log(num);
}
evensToTwenty();

console.log(".......................................")
console.log("kata3:")
function oddsToTwenty() {  
  for (let num = 1; num <= 20; num +=2)
    console.log(num); 
}
oddsToTwenty();

console.log(".......................................")
console.log("kata4:")
function multiplesOfFive() {
  for (let num = 5; num <= 100; num +=5)
    console.log(num);
}
multiplesOfFive();

console.log(".......................................")
console.log("kata5:")
function squareNumbers() {
  for (let num = 1; num <= 10; num++){
    let num1 = num*num;
    console.log(num1);
    }
}
squareNumbers();

console.log(".......................................")
console.log("kata6:")
function countingBackwards() {
  for (let num = 20; num >= 1; num--)
  console.log(num);
}
countingBackwards();

console.log(".......................................")
console.log("kata7:")
function evenNumbersBackwards() {
  for (let num = 20; num >= 2; num-=2)
  console.log(num);
}
evenNumbersBackwards();

console.log(".......................................")
console.log("kata8:")
function oddNumbersBackwards() {
  for (let num = 19; num >= 1; num -=2)
    console.log(num);
}
oddNumbersBackwards();

console.log(".......................................")
console.log("kata9:")
function multiplesOfFiveBackwards() {
  for (let num = 100; num >= 5; num -=5)
    console.log(num);
}
multiplesOfFiveBackwards();

console.log(".......................................")
console.log("kata10:")
function squareNumbersBackwards() {
  for (let num = 10; num >= 1; num--){
    let num1 = num*num;
    console.log(num1);
  }
}
squareNumbersBackwards();