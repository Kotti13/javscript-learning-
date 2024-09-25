function print (...args){
  console.log(...args);
}


//1. Fix the issues in this code

calculateArea();
greetUser();

function calculateArea() {
 const radius = 5;
 
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
 
 var userName = "John";
 console.log(userName);
}



//2.Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?

let count = 1;
while (count <=100) {
 console.log("Counting down: " + count);
 count = count + 1;
}


//3.Why always It's cold outside. is printed irrespective of the temperature value. Fix this!

let temperature = 30;
if (temperature < 20) {
    console.log("It's cold outside.");
   } else {
    console.log("It's warm outside.");
   }
   

//4. Fix the issues in the code so that output is printed correctly


checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num > 0){
    console.log("Negative");
}
  else if (num < 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}   



//5.Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.

// function sumNumbers (n) {
//     let sum =0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     } 

//   console.log(sum);
// }

// sumNumbers(10);

function sumNumbers(n){
    let sum=0;
    let i=1;
    while(i<=n){
        sum+=i;
        i++;
    }
    return sum;
}

console.log(sumNumbers(30));


//6.Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.

function factorial(n){
  let sum=1;
  for(let i=n;i>0;--i){
      sum*=i;
  }
  console.log(sum);
}

factorial(6);


//7.Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.

function printEvenNumbers(n){
  let i=0;
  while(i<=n){
   
      if(i%2==0){
          
          
          console.log(i);
          
      }
      i++;
      
  }

  
}

console.log(printEvenNumbers(10));


//8.Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.

function sumNumbers(n) {
  let sum = 0;
  let i = 0;  
  while (i <= n) {
    sum += i;
    i++;
  }  
  return sum;
}

console.log(sumNumbers(10));



//9.Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

// If the number is divisible by 3, return "Divisible by 3".
// If the number is divisible by 5, return "Divisible by 5".
// If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
// If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".


function classifyNumber(n){
  if(n%3==0&&n%5==0){
    console.log("Divisible by both 3 and 5");
  }
  else if(n%3==0){
    console.log("Divisible by 5");
  }
  else if(n%3==0){
    console.log("Divisible by 3");
  }
  else{
    console.log("Not divisible by 3 or 5");
  }
  
}

console.log(classifyNumber(15));



//10. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week.

function getDayName(daynumber){
  switch (daynumber) {
    case 1:
      return "sunday";
      case 2:
        return "Monday";
        case 3:
          return "Tuesday";
          case 4:
            return "Wednesday";
            case 5:
              return "Thursday";
              case 6:
                return "Friday";
                case 7:
                  return "Saturday";
                  default:
                    return "invalid date";
  }
}


console.log(getDayName(1));


//11. Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
// For example, if n =5 and r = 6
// Expected O/P
// 5 * 6 = 30
// 5 * 5 = 25
// 5 * 4 = 20
// 5 * 3 = 15
// 5 * 2 = 10
// 5 * 1 = 5


function printMultiplicationTable(n){

  for(let i=6;i>0;i--){
    console.log(n+" * "+i+" = "+i*n);

  }

}

printMultiplicationTable(5);

//12.Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps and display the lap number each time the robot completes one.

let i=1;
while(i<=10){
  console.log("Lap number:"+i);
  i++;
  
}

//13.A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.


let batterylevel=100;
while(batterylevel>20){
    console.log("batterylevel:"+batterylevel);
    batterylevel-=5;
    
}
console.log("battery is low");


//14.A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.






//15.An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.
let altitude=1000;
while(altitude>0){
    console.log("altitude:"+altitude+"ft");
    altitude-=10;
}
console.log("flight arrived");


//16. Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement to assign the runway depending on the destination entered by the user.



//17.Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.




//arrays

//1.Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.



//2.Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.

function countAvailableSeats(seats) {
  let count = 0;
  for (let seat of seats) {
      if (seat === 0) {
          count++;
      }
  }
  return count;
}


let seats = [1, 0, 1, 1, 0, 0, 1, 0];
console.log(countAvailableSeats(seats));


//3.Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.

let soldiers=[120, 300, 250, 180, 150];

let a=soldiers[0];
for (let i=0;i<soldier.length;i++){
  if(soldiers[i]>a){
    a=soldiers[i];
    
  }
  
  
}
console.log(a);


//4.Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.

let populations=[50, 60, 70, 80, 90];

let sum=0;
for(i=0;i < populations.length;i++){
  sum+=populations[i];
}
console.log(sum/populations.length);


//5.Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.

let water_levels= [30, 50, 20, 40, 60];

let lowestwaterlevel=Math.min(...water_levels);
console.log(lowestwaterlevel);

//6.Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.
let days_until_festival=[30, 15, 45, 10, 25];

let closestfestival=Math.min(...days_until_festival);

console.log("Closest upcoming festival is in "+closestfestival+" days");

//7.


// Array Methods and Objects

//1.ush Multiple Elements
// Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.

let colors=["red","blue"];
colors.push("yellow","white");
console.log(colors);

//2.Shift Multiple Times
// Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, and print the array after each removal.

let fruits=["banana","apple","orange","pineapple","grapes"];
fruits.shift();
fruits.shift();
console.log(fruits);

//3.Unshift with Multiple Arguments
// Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the beginning in a single line and print the array.
let sports=["cricket","football"];
sports.unshift("volleyball","baseball","golf");
console.log(sports);

//4.Find Non-Existing Element with indexOf()
// Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.


let devices=["smartphone","laptop","computer"];

if(devices.indexOf("laptop")>=0){
    console.log("found");
}
else{
    console.log("not found");
}

//5. Split String with Different Delimiter
// Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.

let string="HTML-CSS-JavaScript";

let str=string.split("-");
console.log(str);

//6.Reverse Order of Array Using pop()
// Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in a new array in reverse order. Print the reversed array.

let create=[1,2,3,4];
let reverse=[];
while(create.length>0){
 reverse.push(create.pop())
}
console.log(reverse);

