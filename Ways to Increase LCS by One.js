class Solution {
    lcs(str1, str2) {
        const n = str1.length;
        const m = str2.length;
        let prev = new Array(m + 1).fill(0);
        let curr = new Array(m + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    curr[j] = 1 + prev[j - 1];
                } else {
                    curr[j] = Math.max(prev[j], curr[j - 1]);
                }
            }
            // swap prev and curr (equivalent to prev = curr, but avoids aliasing issues)
            [prev, curr] = [curr, prev];
        }
        return prev[m];
    }

    waysToIncreaseLCSBy1(s1, s2) {
        const lcs1 = this.lcs(s1, s2);
        let cnt = 0;
        const n1 = s1.length;
        const in_s2 = new Array(26).fill(false);

        for (const c of s2) {
            in_s2[c.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
        }

        for (let i = 0; i <= n1; i++) {
            for (let code = 'a'.charCodeAt(0); code <= 'z'.charCodeAt(0); code++) {
                if (!in_s2[code - 'a'.charCodeAt(0)]) continue;

                const ch = String.fromCharCode(code);
                const slcs2 = s1.substring(0, i) + ch + s1.substring(i);
                const lcs2 = this.lcs(slcs2, s2);

                if (lcs2 === lcs1 + 1) {
                    cnt++;
                }
            }
        }
        return cnt;
    }
}