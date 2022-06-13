// function Fibonacci(n){
//     if(n===0 || n===1)
//         return n;

//     var a1 = 0;
//     var a2 = 1;
//     var result = 0;
//     for(var i=2; i<=n; i++){
//         result = a1+a2;
//         a1=a2;
//         a2=result;
//     }
//     return result;
// }

// for(var i=0; i<10; i++){
//     console.log("i: "+i+" "+Fibonacci(i));
// }


// function myFunction(callBack){
//     callBack("duy");
// }

// myFunction(function(value){
//     console.log(value);
// })

// var input = 'haiku,IUHcoder,tasks';

// console.log(input.split(",").join(" "));

function sumSo(i, j){
    var sum = 0;
    for(var u=i; u<=j; u++){
        if(u%3===0)
            sum +=u;
    }
    return sum;
}

console.log(sumSo(3,3))

console.log("duy");


