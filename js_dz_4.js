function isEven(num) {
  let result = num % 2;
  
  if (result == 0) {
    return true
  } 
    return false
}

function checkProbabilityTheory(count) {
    let a;
    let min = 100; //але я би передавала значення мін та макс в параметри функції
    let max = 1000; //але я би передавала значення мін та макс в параметри функції
    let b = [];
    let even = 0;
    let nEven = 0;
    for(let i=0; i<count; i++) {
        a = min + Math.random() * (max - min);
        a = Math.round(a);
        //console.log(i);
        if (isEven(a)){
            even++;
        } else {
            nEven++;
        }
        //console.log(a);
        b[i] = a;
    }

    let r = {};
    r.numbers = b;
    r.amount = b.length;
    r.even = even;
    r.nEven = nEven;
    r.percentEven = Math.round(even/(count/100));
    r.percentNEven = Math.round(nEven/(count/100));
    r.percentDiff = Math.abs(r.percentEven - r.percentNEven); //взято із конспекту групи, з якої прийшла. 
    // можна це, звісно, зробити через конструкцію if та порівнювати що від чого віднімати, щоб не отримувати від'ємне число

    return r;
    
}

let r = checkProbabilityTheory(10000);
console.log(r);






//
// #1
// function isEven(num) {
//   let result = num % 2;
  
//   if (result == 0) {
//     return true
//   } 
//     return false
// }
// console.log(isEven(8))



// #2
// function summArray(arr) { 
// let sum = 0;
//   for(let i=0; i<arr.length; i++) {   
    
//     sum = arr[i] + sum;
    
//   }
//   return sum

// }

// let sum = summArray([3, 2, 6, 7])


// console.log(sum)





// // check for 1000:
// 
// function random(amount) {
//     let a;
//     let min = 100;
//     let max = 1000;
//     let b = [];
//     for(let i=0; i<amount; i++) {
//         a = min + Math.random() * (max - min);
//         a = Math.round(a);
//         //console.log(i);
//         //b[i] = a;
//         if (a==1000){ b[i] = a;}
//     }
//     return b;
// }

// // let a = random(10);
// console.log(random(50000));