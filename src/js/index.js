function palindrome(word) {
    let arr = word.split('');
    let revArr = word.split('').reverse();

    for (i =0; i < arr.length; i++) {
        return arr[i] === revArr[i];
    }
}

let word_1 = "шалаш";
let word_2 = "anna";
let word_3 = "шашлык";


let isPolindrome = palindrome(word_1)
console.log(isPolindrome) //true

isPolindrome = palindrome(word_2)
console.log(isPolindrome) //true

isPolindrome = palindrome(word_3)
console.log(isPolindrome) //false