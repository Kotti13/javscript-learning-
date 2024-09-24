//js basic excercise

// let a=10;
// let b=20;
// console.log(a+b);

//declare methods

// var
// let
// const

// {
//     var h=20;
// }
// console.log(h);


// //excercise
// const price=100;
// const product="gift";
// const value=price+4;
// console.log(product);
// console.log("total="+value);

// Write a function called fizzBuzz that takes a number n as an argument and prints the numbers from 1 to n. However, for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".


// function fizbuzz(n){
//     for(let i=1;i<=n;i++){
//        if(i%3==0&&i%5==0){
//            console.log("fizbuzz")
//        }
        
//        else if(i%3==0){
//             console.log("fizz");
//         }
//         else if(i%5==0){
//             console.log("buzz");
            
//         }
//         else{
//             console.log(i);
//         }
//     }
    
// }
// fizbuzz(15);



//Write a function called sumEvenNumbers that takes a number n as an argument and returns the sum of all even numbers from 1 to n.

// sumEvenNumbers(10); // returns 30 (2 + 4 + 6 + 8 + 10)
// sumEvenNumbers(5);  // returns 6 (2 + 4)


// function sumEvenNumbers(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             sum+=i;
//         }
        
        
//     }
//     console.log(sum);
// }
// sumEvenNumbers(10);


//Write a function called factorial that takes a non-negative integer n as an argument and returns the factorial of that number. The factorial of a number is the product of all positive integers less than or equal to that number.

// factorial(5); // returns 120 (5 * 4 * 3 * 2 * 1)
// factorial(0); // returns 1 (0! is defined as 1)

// function factorial(n){
//     let sum=1;
//     for(i=n;i>0;i--){
//         sum=i*sum;
//     }
    
//     console.log(sum);
// }

// factorial(5);


//Write a function called fibonacci that takes a number n as an argument and returns an array containing the first n numbers of the Fibonacci sequence. The Fibonacci sequence is defined as follows:

// function fibonacci(n) {
//     // Handle cases for n = 0 and n = 1
//     if (n <= 0) {
//         return [];
//     } else if (n === 1) {
//         return [0];
//     }

//     // Initialize the Fibonacci array with the first two numbers
//     const fibArray = [0, 1];

//     // Use a loop to generate the Fibonacci sequence
//     for (let i = 2; i < n; i++) {
//         const nextNumber = fibArray[i - 1] + fibArray[i - 2];
//         fibArray.push(nextNumber); // Add the next number to the array
//     }

//     return fibArray; // Return the array of Fibonacci numbers
// }

// // Test cases
// console.log(fibonacci(5)); // returns [0, 1, 1, 2, 3]

// Write a function called mergeSortedArrays that takes two sorted arrays of numbers as arguments and merges them into a single sorted array. The function should not use any built-in array sorting methods.

// function mergeSortedArrays(arr1, arr2) {
//     const mergedArray = [];
//     let i = 0; // Pointer for arr1
//     let j = 0; // Pointer for arr2

//     // Loop until we reach the end of either array
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++; // Move the pointer in arr1
//         } else {
//             mergedArray.push(arr2[j]);
//             j++; // Move the pointer in arr2
//         }
//     }

//     // If there are remaining elements in arr1, add them
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     // If there are remaining elements in arr2, add them
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray; // Return the merged sorted array
// }

// // Test cases
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // returns [1, 2, 3, 4, 5, 6]


function print(...args){
    console.log(...args);
}

print("hello");