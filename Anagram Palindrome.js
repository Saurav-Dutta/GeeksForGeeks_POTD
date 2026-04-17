class Solution {
  canFormPalindrome(s) {
    let freq = new Array(26).fill(0);

    for (let ch of s) {
      freq[ch.charCodeAt(0) - 97]++;
    }

    let oddCount = 0;

    for (let count of freq) {
      if (count % 2 !== 0) {
        oddCount++;
      }
    }

    return oddCount <= 1;
  }
}