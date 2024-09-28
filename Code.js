console.log("JS connected to console")

//declaring a function
function playCraps(){
   //im checking if the function will work
    console.log("Function runing?")

    //random # gen 1-6
    let die1 = Math.floor(Math.random() * 6) +1;
    let die2 = Math.floor(Math.random() * 6) +1;
    let sum = die1 + die2;
//message on the HTML
let message = `Dice1: ${die1}, Dice2: ${die2}, Sum: ${sum}<br/>`;
console.log(message)
//Game logic, checking if the sum is = to the win requirements
 if (sum == 7 || sum == 11){
     message += "You Win!"
// The code checks if two dice (die1 and die2) are equal and whether the value of die1 is even. If both conditions are true, the corresponding block of code will execute
 } else if (die1 == die2 && die1 % 2 == 0) {
     message += "You Win!";
//checking if the numbers roled are less for loss condition
 } else {
     message += "You Lose!";
 } 
//to display WIN or LOSE
document.getElementById("content").innerHTML += message;
}