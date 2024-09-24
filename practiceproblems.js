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
if (temperature > 20) {
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
    console.log(sum);
}

sumNumbers(30);


//6.Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.

function calculateFactorial(n){
    
}


