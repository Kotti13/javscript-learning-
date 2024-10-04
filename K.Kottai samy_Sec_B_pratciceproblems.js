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

function flight_Runway(city){
  switch(city){
      case "chennai" :
          console.log("Runway : 1");
          break;
      case "madurai" :
          console.log("Runway : 2");
          break;
      case "tuticorin" :
          console.log("Runway : 3");
          break;
      case "trichy" :
          console.log("Runway : 4");
          break;
  }
}
flight_Runway("madurai");

//17.Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.


function airplane_altitude(altitude,interval){
  altitude_interval = altitude/interval;
  for (let i = 1; i <= interval; i++){
      let currentAltiude = altitude_interval * i;
      console.log(Altitude = ${currentAltiude} ,ft);
      
  }
}
airplane_altitude(1000,10);


//arrays

//1.Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.

function train_time(train_departures){
  let early = train_departures[0];
 for(let i = 0; i < train_departures.length; i++){
  if (train_departures[i]<early) {
      early=train_departures[i];
  }
 }
 return early;
}
let a=train_time([10, 15, 7, 20, 5]);
console.log(a);

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

//7.Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.

function same_time(landing_times){
  for(let i = 0; i < landing_times.length; i++){
      for(let j = i+1; j < landing_times.length; j++){
          if(landing_times[i] == landing_times[j]){
              return "Yes";
          }
      }
  }
  return "No";
}
console.log(same_time([12, 15, 12, 18, 20]));


//8.  Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.

function temperature1(temperatures, limit){
  let degrees ;
  for(let i = 0; i < temperatures.length; i++){
      if(temperatures[i] > limit){
          degrees = temperatures[i];
      }
  }
  return degrees;
}
console.log(temperature1([75, 80, 72, 85, 90] , 80));


// 9. Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.

function bus_Route(students_per_route, max_student){
  let bus = 0;
  let str = 0;
  for(let i = 0; i < students_per_route.length; i++){
      str +=students_per_route[i];
      bus = Math.round(str/max_student);
  } 
  return bus;
}
console.log(bus_Route([45, 55, 30, 60, 40], 50));

// 10.  You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.

function totalexpence(weekExpenses){
  let sum = 0;
  for(let i = 0; i < weekExpenses.length; i++){
      sum += weekExpenses[i];
  }
  return sum;
}
console.log(totalexpence([100, 70, 300, 150, 200, 550, 350]));

// 11.  You are given an array of student grades. Write a function that calculates the average grade.

function calculateAverage(grade){
  let sum = 0;
  for(let i = 0; i < grade.length; i++){
      sum += grade[i];
  }
  sum = Math.floor(sum / grade.length);
  return sum; 
}
console.log(calculateAverage([100, 80, 50, 70, 90]));

//12.   You have an array of people ages. Write a function that filters out people who are 18 years old or older.

let ages = [23, 18, 28, 34, 15];
let major = ages.filter(function(age) {
    return age >= 18;
});
console.log(major);

// 13.  You have an array of integers. Write a function that returns the count of the even numbers in the array.

function integers(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
          count++;
      }
  }
  return count;
}
console.log(integers([1, 2, 3, 4, 5, 6]));




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


//7.Joining Array Elements Without a Separator
// Create an array of 4 fruits. Use join() without any separator to combine the array elements into a single string and print the result.


let fruit=["banana","grapes","dates","orange"];



let joining=fruit.join("");
console.log(joining);


//8.Object with Simple Properties
// Write a program to create an object car with properties make, model, and year. Print the model of the car.

let car={
    
  make:"toyoto",
model:"supra",
year:2019,

}

console.log(car.model);


//9. Array of Objects (Books)
// Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book.

let books=[
  {
      title:"rich dad poor dad",
      author:"Robert Kiyosaki ",
  },
  {
      title:"harry potter",
      author:"J. K. Rowling",
  }]
  
  
  console.log(books[0].book);


  //10.Adding New Property to Objects in an Array  
// You have an array of 4 objects, each representing a car with properties brand and model. Write a program to add a new property year to each object and assign a value, then print the updated array.

let cars=[
  {
      brand:"tata",
      model:"punch"
      
  },
  {
      brand:"toyoto",
      model:"supra"
  },
  {
      brand:"bmw",
      model:"a8"
  },
  {
      brand:"audi",
      model:"Q7"
  }
  
  
  ]
  
 cars[0].years = 2023;
cars[1].years = 2012;
cars[2].years = 2018;
cars[3].years = 2015;
      
  
  console.log(cars);


  //11.Summing Object Property Values in an Array  
  //  You have an array of 3 objects, each representing a product with properties name and price. Write a program to calculate and print the total price of all the products in the array.

  let product=[
    {
        name:"laptop",
        price:28000
        
    },
    {
        name:"phone",
        price:15000
        
    },
    {
      name:"television",  
      price:12000
    }
    ]
   
   let sumprice=0;
   for(let i=0;i<product.length;i++){
       sumprice+=product[i].price;
   }
   console.log("Total:"+sumprice);

   //12.Finding an Object by Property Value in an Array  
  //  You have an array of 5 objects, each representing a student with properties name and grade. Write a program to find and print the name of the student whose grade is "A".

  let students= [
    { name: "Amar", 
      grade: "A" },
    { name: "Akbar", 
      grade: "B" },
    { name: "Anthony", 
      grade: "A" },
  ];
  let arr1 = [];

for (let i=0;i<students.length;i++){
    if(students[i].grade==="A"){
        
        arr1.push(students[i].name);
       
    }
     
}console.log(arr1);


//Real-world use-cases:

//1.Average of Scores
// Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
let scores=[90,78,89,89,100];
sum=0;
for(let i=1;i<scores.length;i++){
    sum+=scores[i];
}
console.log(Math.trunc(sum/scores.length)+"%");

//2.Finding Maximum Score
// You have an array of test scores for 7 students. Write a program to find and print the highest score using the Math.max() function along with the spread operator.

let studentscores=[90,78,89,89,100,78,83];
let maximum=Math.max(...scores);
console.log(maximum);

//3.Number System Conversion
// Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values.

let decimal=[3,5,15];
for(let i=0;i<decimal.length;i++){
    let binary=decimal[i].toString(2);
    console.log("binary:"+decimal[i]+":"+binary);
}

//4.Boolean Algebra (AND Operation)
// Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.

let array1=[true, false, true];
let array2=[false, true, true];
let result=[];

for(let i=0;i<array1.length;i++){
    result[i]=array1[i]&&array2[i];
}
console.log(result);


//5.Percentage Increase in Prices
// Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.

let price1=[34,56,78];
let price2=[56,78,90];
let increase=[];
for(let i=0;i<price1.length;i++){
    let calculate=price2[i]-price1[i];
    let percentage=Math.trunc((calculate/price1[i])*100);
    increase[i]=percentage;
    
}
console.log(increase);

//6.Set Theory (Union of Two Sets)
// Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.

let set1=[1,2,3];
let set2=[2,3,4];

let union=[...new Set([...set1,...set2])];
console.log(union);


//7.Finding the Mode (Most Frequent Element)
// Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. If there are multiple modes, print any one of them.

let numbers = [1, 3, 2, 2, 2, 5, 2, 3, 1, 3];
let mode = numbers[0];
let maxCount = 0;

for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (var j = 0; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]);
        count++;
    }
    if (count > maxCount)
    maxCount = count; 
    mode = numbers[i]; 
    
}


console.log("The mode is:", mode);

//8.Modulus Operation for Time Calculation
// Create an array of times (in minutes) that different tasks take to complete. Write a program to find out how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators, and save the result in the same array. Print the array.

let time = [90, 150, 45, 120, 200];

for(let i=0;i<time.length;i++){
  let hours=Math.floor(time[i]/60);
  let minutes=time[i]%60;
  time[i]=hours+"Hour "+minutes+" Minutes";
 
}
 console.log(time);


 //9.Simple Interest Calculation
// Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. Find the simple interest for each array object and store it in a new array. Print this array.
// For example: 
// details = [
// { principal : 10000, rateOfInterest : 5, noOfYears: 4},
// { principal : 15000, rateOfInterest : 4, noOfYears: 3},
// ]
// Output:
// [ 2000, 1800 ]


let details = [
  { principal: 10000, rateOfInterest: 5, noOfYears: 4 },
  { principal: 15000, rateOfInterest: 4, noOfYears: 3 },
  { principal: 20000, rateOfInterest: 6, noOfYears: 5 },
  { principal: 25000, rateOfInterest: 3, noOfYears: 2 },
  { principal: 30000, rateOfInterest: 7, noOfYears: 6 },
  { principal: 12000, rateOfInterest: 5.5, noOfYears: 4 },
  { principal: 18000, rateOfInterest: 4.5, noOfYears: 3 },
  { principal: 22000, rateOfInterest: 6.2, noOfYears: 5 },
  { principal: 16000, rateOfInterest: 5, noOfYears: 4 },
  { principal: 13000, rateOfInterest: 4, noOfYears: 2 },
];


let simpleinterests=[];

for(let i=0;i<details.length;i++){
 let {principal,rateOfInterest,noOfYears}=details[i]
  let si=(principal*rateOfInterest*noOfYears)/100;
  simpleinterests.push(si);
  
}
console.log(simpleinterests);

//10.Calculating Total Marks of Students 
// You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. Write a program to calculate the total marks for each student and store them in a new array. Print the new array.
// Example:
// students = [
// { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
// { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
// ]
// Output:
// [ 240, 175 ]

 let student = [
  { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
  { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
  { subject1Marks: 75, subject2Marks: 85, subject3Marks: 80 },
   { subject1Marks: 90, subject2Marks: 95, subject3Marks: 100 },
   { subject1Marks: 55, subject2Marks: 60, subject3Marks: 58 },
   { subject1Marks: 70, subject2Marks: 75, subject3Marks: 80 },
   { subject1Marks: 85, subject2Marks: 90, subject3Marks: 88 },
   { subject1Marks: 45, subject2Marks: 50, subject3Marks: 55 },
   { subject1Marks: 100, subject2Marks: 95, subject3Marks: 90 },
    { subject1Marks: 78, subject2Marks: 82, subject3Marks: 76 },
  
  ]
  
  let totalMarks=[];
  
  for(let i=0;i<students.length;i++){
      let{subject1Marks,subject2Marks,subject3Marks}=students[i];
      let total=subject1Marks + subject2Marks + subject3Marks;
      totalMarks.push(total);
  }
  console.log(totalMarks); 

  //11.Calculating Total Monthly Expenses
// You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities. Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.
// Example:
// expenses = [
// { rent: 1000, groceries: 500, utilities: 200 },
// { rent: 800, groceries: 400, utilities: 150 },
// ]
// Output:
// [ 1700, 1350 ]

let expenses = [
  { rent: 1000, groceries: 500, utilities: 200 },
  { rent: 800, groceries: 400, utilities: 150 },
  { rent: 1200, groceries: 600, utilities: 300 },
  { rent: 950, groceries: 350, utilities: 250 },
  { rent: 1100, groceries: 450, utilities: 100 },
  { rent: 700, groceries: 300, utilities: 200 },
  { rent: 1300, groceries: 700, utilities: 400 },
  { rent: 900, groceries: 450, utilities: 180 },
  { rent: 1000, groceries: 500, utilities: 250 },
  { rent: 750, groceries: 250, utilities: 100 },
];

let totalexpence=[];

for(let i=0;i<expenses.length;i++){
  let {rent,groceries,utilities}=expenses[i]
  let sum=rent + groceries + utilities;
  totalexpence.push(sum);
  
}
console.log(totalexpence);





