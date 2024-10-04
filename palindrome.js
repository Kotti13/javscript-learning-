function palindrome(num){
    let numstring=num.toString();
    
    let reversenumber=numstring.split('').reverse().join('');
    if(numstring===reversenumber){
        console.log("yes");
    }
    else{
        console.log("no");
    }
    
}

palindrome(423);

function fibonacci(n){
  let a=[];
  for(let i=0;i<n;i++){
    if(i===0){
      a.push(0);
    console.log(i)
    }
    else if(i===1){
      a.push(1);
    }
    else{
      let b=a[i-1]+a[i-2];
      a.push(b);
    }
    
  }
  console.log(a);
}

fibonacci(15);