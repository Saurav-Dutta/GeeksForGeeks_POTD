class Solution {

  isValid(s) {
    if (s.length < 1 || s.length > 3) return false;

    // Leading zero check
    if (s.length > 1 && s[0] === '0') return false;

    let number = Number(s);

    return number >= 0 && number <= 255;
  }

  generateString(i, j, k, s) {
    let s1 = s.substring(0, i + 1);
    let s2 = s.substring(i + 1, j + 1);
    let s3 = s.substring(j + 1, k + 1);
    let s4 = s.substring(k + 1);

    if (this.isValid(s1) && this.isValid(s2) && this.isValid(s3) && this.isValid(s4)) {
      return `${s1}.${s2}.${s3}.${s4}`;
    }

    return "";
  }

  generateIp(s) {
    let ans = [];
    let n = s.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
          let genString = this.generateString(i, j, k, s);

          if (genString.length >= 1) {
            ans.push(genString);
          }
        }
      }
    }

    return ans;
  }
}