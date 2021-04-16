let user = 'John Doe';
console.log(user);

let student = 'Arseni';
user = student;
console.log(user); // 'user' variable has been reassigned

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


const arr1 = [2, 3, 5, 8];
let multArr1 = 1;
for (let i = 0; i < arr1.length; i++) {
    multArr1 *= arr1[i];
}
console.log('multiplication of arr1 ' + multArr1);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        console.log('arr2 elements > 5 and < 10: ' + arr2[i])
    }
}

const arr3 = arr2;
for (i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        console.log('even elements of arr3: ' + arr3[i])
    }
}