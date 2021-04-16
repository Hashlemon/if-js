function palindrome(word) {
    let arr = word.split('');
    let revArr = word.split('').reverse();
    let isEqual = false
    for (i =0; i < arr.length; i++) {
        isEqual = arr[i] === revArr[i];
        console.log('from func ' + isEqual)
            if (isEqual === false)
                break;
        }
    return isEqual === true;


}


let word_1 = "ша2ш";
let word_2 = "an2na";
let word_3 = "anna";


let isPolindrome = palindrome(word_1)
console.log(isPolindrome)
isPolindrome = palindrome(word_2)
console.log(isPolindrome)
isPolindrome = palindrome(word_3)
console.log(isPolindrome)
