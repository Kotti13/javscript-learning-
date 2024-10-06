// Practice problems for now:
// 1. Write a program to check if the character is a vowel, print "The character is a vowel." If the character is a consonant, print "The character is a consonant." Make sure to handle both upper and lower case letters. A vowel is a character which is any of letters a, e, i, o, u. Any letter which is a not a vowel is considered a consonant.

function vowels(char){
    switch (char){
    case'A':
    case'a':
    case'E':
    case'e':
    case'I':
    case'i':
    case'O':
    case'o':
    case'U':
    case'u':
    message="this is vowel"
    break;
    default:
        message="this is consonant"
}
 console.log(message);   
}

vowels('m');
// 2. Given three numbers a, b, c print the maximum number amongst the three.
// a =10, b = 30, c = 5
// print 30

let a=10;
let b=30;
let c=5;

let max=Math.max(a,b,c);
console.log(max);


// 3. Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term
// if n = 4, print the first 4 odd numbers 1 3 5 7

function followingseries(n){
    for(let i=0;i<n;i++){
        console.log(2*i+1);
    }
   
}

followingseries(4);

// 4. If the initialDiscount is 5% and the dailyIncrease is 2%, the function should calculate the total discount over 10 days.
// Day 1: 5%
// Day 2: 7% (5% + 2%)
// Day 3: 9% (7% + 2%)
// ...
// Day 10: Calculate this using a loop.
// Remember, you don't have to store each day's discount. Just keep a running total of the discount percentage. The challenge is to use a single loop to accumulate the total discount percentage over the 10 days.

let discount=5;
let increment=2;
let total=0;
let days=10;
for(let i=1;i<=days;i++){
    total+=discount;
    discount+=increment;
}
console.log(`Total dicount over ${days}days:${total}%`)

// 5. Complete the program printAllMultiplesOf5Bet(a, b)
// eg, printAllMultiplesOf5Bet(10, 30) in reverse
// 30
// 25
// 20
// 15
// 10

function printAllMultiplesOf5Bet(a, b){
    for(let i=b;i,i>=a;i--){
        if(i%5==0){
            console.log(i)
        }
        
    }
}
printAllMultiplesOf5Bet(10, 30);



//find and print first letter of name
// let array="GOKUL  PRANESH KOTTAI GUNA";
// let split=array.split(" ");
// let sum="";
// for(i=0;i<split.length;i++){
//   sum+=split[i].charAt(0);
// }
// console.log(sum);



//anagram what is angaram have in same number of letters and also same letters

//anagram

let str1="GUm";
let str2="MUG";
let str3=str1.toUpperCase().split("").sort().join("");
let str4=str2.split("").sort().join("");
if(str3==str4){
  console.log("anagram");
}
else{
  console.log("not")
}


//anargram in function  return true or false

function anagram(str1,str2){
    str1=str1.split("").sort().join("");
    str2=str2.split("").sort().join("");
    
    return str1===str2;
}

console.log(anagram("silent","listen"));