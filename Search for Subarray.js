class Solution {
    search(a, b) {
        let n = a.length;
        let m = b.length;

        let result = [];

        if (m === 0) return result;

        // Build LPS array
        let lps = new Array(m).fill(0);

        for (let i = 1, len = 0; i < m;) {
            if (b[i] === b[len]) {
                lps[i++] = ++len;
            } else if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }

        // KMP Search
        for (let i = 0, j = 0; i < n;) {
            if (a[i] === b[j]) {
                i++;
                j++;
            }

            if (j === m) {
                result.push(i - j);
                j = lps[j - 1];
            } else if (i < n && a[i] !== b[j]) {
                if (j !== 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }

        return result;
    }
}