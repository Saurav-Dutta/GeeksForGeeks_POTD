class Solution {
    compress(s) {
        const n = s.length;

        // KMP prefix array
        const pi = new Array(n).fill(0);

        for (let i = 1; i < n; i++) {
            let j = pi[i - 1];

            while (j > 0 && s[i] !== s[j]) {
                j = pi[j - 1];
            }

            if (s[i] === s[j]) {
                j++;
            }

            pi[i] = j;
        }

        let ans = [];

        let i = n - 1;

        while (i >= 0) {
            const len = i + 1;

            if (len % 2 === 0) {
                const period = len - pi[i];

                if (
                    pi[i] >= len / 2 &&
                    len % (2 * period) === 0
                ) {
                    ans.push('*');

                    i = len / 2;
                    i--;
                    continue;
                }
            }

            ans.push(s[i]);
            i--;
        }

        // C++ reverse(ans.begin(), ans.end())
        ans.reverse();

        return ans.join('');
    }
}