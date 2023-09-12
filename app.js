                    //    Welcome to Js Assignment (Before the access you have to uncomment it)
                    //                   And dont forget to gave your reviews

// Question 1
// var userinput = prompt('Whats your Name')
// alert('Welcome ' + userinput)

// Question 2
// var userinput = +prompt('Enter a number to print its multiplication table')
// if(userinput == " "){
//     for(var i = 1 ; i<=10 ; i++){
//         document.write( 5 + ' x ' + i + ' = ' + 5 * i + '<br>')
//     }
// }
// else{
//     for(var i = 1 ; i<=10 ; i++){
//         document.write(userinput + ' x ' + i + ' = ' + userinput * i + '<br>')
//     }
// }

// Question 3
// var userinput = prompt("Enter City Name")
// var arr = ['Karachi']
// var match = false
// for (var i = 0; i < arr.length; i++) {
//     if (userinput == arr[i]) {
//         match == true
//         alert("Welcome to city of lights")
//     }
// }

// Question 4
// var userinput = prompt('Enter Your Gender')
// if(userinput == "Male"){
//     alert("Good Morning Sir")
// }
// else if(userinput == "Female"){
//     alert("Good Morning Ma'am")
// }
// else{
//     alert("invalid Gender")
// }

// Question 5
// var signal1 = prompt("1st Signal")
// var signal2 = prompt("2nd Signal")
// var signal3 = prompt("3rd Signal")
// var siganl = ["red","yellow","green"]

// if(signal1,signal2,signal3 == siganl){
//     document.getElementById("Traffic-1")
// }

// Question 6
// var max_age = 30
// var curr_age = prompt("Enter your current age")
// if(curr_age == max_age || curr_age < max_age){
//     alert("You are Welcome")
// }
// else if(curr_age > max_age){
//     alert("You are not welcome due to old age")
// }

// Question 7
// var input_fuel = prompt("Input Your Fuel Digits in liters")
// var input_fuel2 = 0.25

// if(input_fuel >= input_fuel2 ){
//     alert("Your Fuel Is Enough to Reach")
// }
// else if(input_fuel < input_fuel2){
//     alert("Please refill the fuel in your car")
// }

// Question 8
// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }
// Output = Yes

// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }
// Output = No

// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// Output = No
// if (c === 13){
//  alert("condition 2 is true");
// }
// Output = Yes
// if (++c < 14){
//  alert("condition 3 is true");
// }
// Output = No
// if(c === 14){
//  alert("condition 4 is true");
// }
// Output = Yes

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// Output = Yes

// if (true) {
//     alert("True");
// }
// Output = Yes
// if (false) {
//     alert("False");
// }
// Output = No

// if("car" < "cat"){
//     alert("car is smaller than cat");
//    }
// Output = Yes

// Question 11
//  var secret_number = [1,2,4,5,6,7,8,9,10]
//  var secret_number2 = [3]
//  var secret_number3 = [4]
//  var userinput = prompt("Guess and Enter the right number from range 1 to 10")
//  if(userinput == secret_number2){
//     alert("Bingo! Correct answer")
//  }
//  else if(userinput == secret_number2 - 1 || userinput == secret_number3){
//     alert("Close enough to the correct answer")
//  }
//  else{
//     userinput = secret_number
//     alert("Better Luck Next Time")
//  }

// Question 12
// var userinput = prompt("Enter the Number to Check that it is divisible by 3 or Not")
// if(userinput % 3 == 0){
//     alert("The number is divisible by 3")
// }
// else if (userinput % 3 !== 0 ){
//     alert("The number is not divisible by 3")
// }

// Question 13
// var userinput = prompt("Enter your Team Name")
// var userinput2 = prompt("Enter your Total Score")
// var userinput3 = prompt("Enter opponent Team Name")
// var userinput4 = prompt("Enter opponent Total Score")

// if(userinput2 > userinput4){
//     alert(userinput +" "+ "won the game")
// }
// else if(userinput2 < userinput4){
//     alert(userinput3 +" "+ "won the game")
// }

// Question 15
// var userInput = prompt("Enter a number:");
// var userNumber = parseFloat(userInput);
// if (!isNaN(userNumber)) {

//     if (userNumber % 2 === 0) {
//         alert("The number " + userNumber + " is even.");
//     } else {
//         alert("The number " + userNumber + " is odd.");
//     }
// } else {

//     alert("Invalid input. Please enter a valid number.");
// }


// Question 16
// var temp = prompt('Enter Temperature')

// if(temp > 40 ){
//     alert("It is too hot outside")
// }
// else if(temp < 40 && temp > 30){
//     alert("The Weather today is Normal")
// }
// else if(temp < 30 && temp > 20){
//     alert("Today’s Weather is cool")
// }
// else if(temp < 20 && temp > 10){
//     alert("OMG! Today’s weather is so Cool")
// }

// Question 17
// var firstNumber = +prompt("Enter First Number")
// var secondNumber = +prompt("Enter Second Number")
// var operation = prompt("Enter Operation That You Want To Perform")
// if(operation == '+'){
//     alert(firstNumber + secondNumber)
// }
// else if (operation == '-'){
//     alert(firstNumber - secondNumber)
// }
// else if(operation == '*'){
//     alert(firstNumber * secondNumber)
// }
// else if(operation == '/'){
//     alert(firstNumber / secondNumber)
// }
// else if(operation == '%'){
//     alert(firstNumber % secondNumber)
// }