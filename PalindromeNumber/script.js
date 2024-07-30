// LeetCode project

/*

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    numbers = x.toString();

    for (let i=0; i<Math.floor(numbers.length/2); i++){
        if (numbers[i] !== numbers[numbers.length - 1 - i]){
            return false
        }
    }
    return true;
};