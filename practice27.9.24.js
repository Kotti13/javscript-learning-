// Practice problems for today: @channel
// 1. Given an array of integers find the number of multiples of 5.

let integers=[2,5,10,35,6];
for(let i=0;i<integers.length;i++){
    if(integers[i]%5==0){
        console.log(integers[i]);
    }
}



// 2. Given an array of integers and 2 numbers a and b (a < b) count the number of elements in the array which are between a and b

let integer=[1,3,5,6,7,56];

function between(a,b){
    for(let i=0;i<integer.length;i++){
        if(integer[i]> a && integer[i]<b){
            console.log(integer[i]);
        }
    }
    
}

between(1,4);

//3.Given an array of strings count the number of elements which are starting with a vowel
// let array=["education","apple","Orange","ant"];
 
// count=0;
// let vowels=['a','e','i','o','u','A','E','I','O','U'];
// for(let i=0;i<array.length;i++){
//     if(array[i].includes(...vowels)){
//         count++;
      
//     }
      
// }
// console.log(count);

//another method
let arr=["Orange","Apple","eat"]

    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i][0]==='a' || arr[i][0]==='A' || arr[i][0]==='e' || arr[i][0]==='E'|| arr[i][0]==='i' || arr[i][0]==='I' || arr[i][0]==='o' || arr[i][0]==='O' || arr[i][0]==='u' || arr[i][0]==='U'){
            count++;
        }
        
    }
       console.log(count);

//4.Given an array of float find the average of the numbers.

let float=[3.5,3.2,6.9,8.5];

sum=0;
for(let i=0;i<float.length;i++){
    sum+=integer[i];
    
}
console.log(Math.trunc(sum/float.length));