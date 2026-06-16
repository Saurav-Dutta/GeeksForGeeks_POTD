// User template for JavaScript

class Solution {
    constructList(queries) {
        let cnt = 0;

        for (let i = 0; i < queries.length; i++) {
            if (queries[i][0] === 0) {
                cnt++;
            }
        }

        let ans = new Array(cnt + 1).fill(0);
        let store = new Array(cnt + 2).fill(0);

        let k = 1;

        for (let i = 0; i < queries.length; i++) {
            if (queries[i][0] === 0) {
                ans[k] = queries[i][1];
                k++;
            } else {
                store[0] = store[0] ^ queries[i][1];
                store[k] = store[k] ^ queries[i][1];
            }
        }

        cnt = 0;

        for (let i = 0; i < ans.length; i++) {
            cnt = cnt ^ store[i];
            ans[i] = ans[i] ^ cnt;
        }

        ans.sort((a, b) => a - b);

        return ans;
    }
}