class Solution {
  removeSpaces(s) {
    let result = "";

    for (let ch of s) {
      if (ch !== ' ') {
        result += ch;
      }
    }

    return result;
  }
}