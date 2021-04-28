//Lesson-2

//Работа с переменными:
let user = 'John Doe';
console.log(user);

let student = 'Arseni';
user = student;
console.log(user); // 'user' variable has been reassigned

//Работа с примитивами:
let test = 1;
test++; // 'test' variable incremented by 1. 'test' is equal 2
console.log('test + 1 = ' + test);

test = test + '1'; // 'test' plus sting. 'test' is a sting 21
console.log('test + sting = ' + test)
console.log(isNaN(test)) // false -- 'test' is not a number

test--; //'test' variable decremented by 1. string value is 20
console.log('test - 1 = ' + test);
console.log(isNaN(test));

test = Boolean(test);// test has a value -- true
console.log('bool test: ' + test);

//С помощью цикла for найдите произведение элементов этого массива. Результат выведите в консоль.
const arr1 = [2, 3, 5, 8];
let multArr1 = 1;
for (let i = 0; i < arr1.length; i++) {
    multArr1 *= arr1[i];
}
console.log('multiplication of arr1 ' + multArr1);

//С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти.
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        console.log('arr2 elements > 5 and < 10: ' + arr2[i])
    }
}

//С помощью цикла for и оператора if выведите в консоль четные элементы массива.
const arr3 = arr2;
for (i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        console.log('even elements of arr3: ' + arr3[i])
    }
}


//Lesson-3

//Функция palindrome
function palindrome(word) {
    let arr = word.split('');
    let revArr = word.split('').reverse();
    let isEqual = false;
    for (let i =0; i < arr.length; i++) {
        isEqual = arr[i] === revArr[i];
           if (isEqual === false)
               break;
        }
    return isEqual === true;
}

let word1 = "ша2ш";
let word2 = "an2na";
let word3 = "anna";

console.log(`Is ${word1} a palindrome? ${palindrome(word1)}`);
console.log(`Is ${word2} a palindrome? ${palindrome(word2)}`);
console.log(`Is ${word3} a palindrome? ${palindrome(word2)}`);


//Функция min(a, b) и функция max(a,b):
const min  = (a, b) => a < b ? a : b;
const max = (a, b) => a > b ? a : b;

let val1 = 20;
let val2 = 3;
let val3 = -2;
let val4 = Math.PI;

console.log(`Min value between ${val1} and ${val2} is ${min(val1, val2)}`);
console.log(`Max value between ${val3} and ${val4} is ${max(val3, val4)}`);


//Замена элементов массива:
const randoms = [...Array(10)].map(() => Math.floor(Math.random() * 100));
console.log(randoms);

const zeroRandoms = randoms.map(x => x % 10 === 0 ? x.toString().replace("0", "zero") : x);
console.log(zeroRandoms);


module.exports = min;

//Lesson 4

//Напишите функцию sum, которая возвращает сумму чисел

function curry (f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        }
    }
}

let sum = (a, b) => a + b;

let curriedSum = curry(sum);

console.log("curried " +  curriedSum(2)(22) )


//Покрасьте абзацы по клику

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let x = document.getElementsByTagName("P");

function changeColor(id) {

    let clickCount = 0;

    return function() {
        if (clickCount !== colors.length) {
            id.style.color = colors[clickCount];
             clickCount++;
        } else {
             clickCount = 0;
        }
    }
}
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', changeColor(x[i]));
}

//Lesson 5



