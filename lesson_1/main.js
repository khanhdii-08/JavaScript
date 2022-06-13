Array.prototype.map2 = function (callBack) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callBack(this[i], i));
  }
  return arr;
};

Array.prototype.forEach2 = function (callBack) {
  for (var i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

Array.prototype.find2 = function (callBack) {
  for (var i = 0; i < this.length; i++) {
    if (callBack(this[i], i)) return this[i];
  }
};

Array.prototype.filter2 = function (callBack) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callBack(this[i], i)) arr.push(this[i]);
  }
  return arr;
};

Array.prototype.reduce2 = function (callBack, result) {
  if(arguments.length!=2){
    result=this[0];
    var i=1;
  }
  i=0;
  for (; i < this.length; i++) {
    result = callBack(result, this[i], i, this);
  }
  return result;
};




var courses = [
  {
      id: 0,
      name: 'html, css, javascript',
      coin: 20
  },
  {
      id: 1,
      name: 'php,mysql',
      coin: 20
  },
  {
      id: 2,
      name: 'react js',
      coin: 5
  },
]


Array.prototype.every2 = function(callBack){
  for (let i = 0; i < this.length; i++) {
    if(!callBack(this[i], i))
      return false;
  }
  return true;
}

Array.prototype.some2 = function(callBack){
  for(var i= 0; i< this.length; i++){
    if(callBack(this[i], i))
      return true;
  }
  return false;
}

var isCoin = courses.every2(function(e){
  return e.coin>10;
});

console.log(isCoin);



// var listNumber = [1, 2, 3, 4, 5];

// var sum = listNumber.reduce2(function (a, b, c, d) {
//   console.log(" a: "+a+" b: "+b+" c: "+c+" d: "+d);
//   return a + b;
// }, 10);

// console.log(sum);

// var courses = ["Java", "PHP", "Ruby", "PHP"];

// var course = courses.reduce(function(a, b){
//   console.log(b)
//   return a==='PHP';
// });

// console.log(course);



// var commentText = '\"Học chưa hiểu là học chưa đủ!\"';
// var authorName = 'Sơn Đặng:';
// var fullCommentText =`${authorName} ${commentText}`;

// console.log(fullCommentText);

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(a, b){
//     return a.concat(b);
// }, [])

// console.log(flatArray);

// var flatArray = [];
// for(var i of depthArray){
//     flatArray = flatArray.concat(i);
// }

// console.log(flatArray);

/**
 * hay nè
 */
//  var languages = 'Duy, An, Huy';

//  var Arraylanguages = languages.split(', ');

//  console.log(Arraylanguages);

//  var name = 'Duy, An\nhuy, tuyen';
//  console.log(name.split('\n'));

// const student = {
//     name : '',
//     age : 0,
//     address : ''
// }

// var student1 = 'Duy, 21, Đồng Tháp';

// var student2 = 'Huy, 21, HCM';

// console.log(student1.charAt(1));

// var list = [student];

// var array1 = student1.split(', ');
// var array2 = student2.split(', ');

// function addStudent(list1, array){
//     student.name = array[0];
//     student.age = array[1];
//     student.address = array[2];
//     console.log(student);
// }

// addStudent(list, array1);
// addStudent(list, array2);

// console.log(list);

// function getUpperCaseName(name){
//     return name.toUpperCase
// }

// function countDow(time){
//     time--;
//     if(time >0){
//         console.log(time);
//         countDow(time);
//     }
//     return;
// }

// countDow(10);

// function sumLe(array){
//     if(array.length > 0){
//         return array[array.length-1] % 2 == 0 ? array[array.length-1] + sumLe(array.slice(0, -1)) : sumLe(array.slice(0, -1));
//     }
//     return 0;
// }

// function mu(a, b){
//     if(b==1)
//         return a;
//     else if(b==0)
//         return 1;
//     else
//         return a*mu(a, b-1);
// }

// console.log(mu(2,3));

// function inDaoNguoc(n){
//     if(n!=0){
//         // console.log(n%10);
//         // console.log(n/10);
//         console.log(Math.floor(n%10));
//         inDaoNguoc(Math.floor(n/10));
//     }
// }
// inDaoNguoc(21);

// console.log(123%10);

// function mu(number){
//     if(number == 0 || number == 1){
//         return number;
//     }else{
//         return mu(number-1) + mu(number-2);
//     }

// }

// for(var i=0; i<10; i++){
//     console.log(mu(i));
// }

// function sumLe(array){
//     if(array.length > 0){ array.splice(-1, 1)
//         return array;
//     }
//     return 0;
// }

// console.log(sumLe([1, 2, 3, 4, 6]));

// function giaiThua(number){
//     if(number > 1)
//         return number*giaiThua(--number);
//     return number;
// }

// console.log(giaiThua(3));

// function Sum(a){
//     if(a>0){
//        return a+Sum(--a);
//     }
//     if(a<= 0)
//         return a;
// }

// console.log(Sum(1));

// for(var i=100; i>0; i--){
//     console.log(i);
// }

// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for(var i of myArray){
//     for(var j of i){
//         console.log(j);
//     }
// }

// Làm bài
// function run(object) {
//     console.log(object.name);
//     var array = [];
//     for(var key in object){
//        array.push('Thuộc tính '+key+' có giá trị ' + object[key]);
//     }
//     return array;
// }

// // Kỳ vọng
// console.log(run({ name: 'Nguyen Van A', age: 16 }));

// var random = Math.random();
// console.log(random);
// console.log(random * (10 - 3));

// function run(a) {
//   if (a % 3 === 0 && a % 5 != 0 && a % 15 != 0) return 1;
//   else if (a % 5 === 0 && a % 15 != 0) return 2;
//   else if (a % 15 === 0) return 3;
// }

// // Kỳ vọng
// console.log(run(3)); // 1
// console.log(run(5)); // 2
// console.log(run(15)); // 3

// function getRandomItem(array){
//     return array[Math.floor(Math.random() * (array.length))];
// }
// getRandomItem();

// function getNextYear(){
//     return new Date().getFullYear()+1;
// }

// console.log(getNextYear());

// // Làm bài tại đây
// function Student(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function(){
//         return this.firstName + " " +this.lastName;
//     }
// }

// // Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');

// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'

// console.log(10/3);
// var a = 1.4142135623730951;
// console.log(isFinite("abc"));

// Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// // var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// function isNumber(value) {
//   return typeof value === "number" ? true : false;
// }

// Kì vọng đạt được
// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// var email = 'duy.txt';

// var i= email.iOf('.');

// var name = email.slice(0, i);

// var fullName = 'pham duy khanh duy';

// var replaceName = fullName.replace(/duy/g, 'an');

// console.log(replaceName);

// var fullName = "Duy là \'Sieu Nhan\'";

// console.log(fullName.iOf('l'));
// function sum (a, b){
//     return a+b;
// }

// var sum2 = function(){

// }

// sum(function(e){
//     console.log(e+1);
// });

// console.log(sum(1, 2));
