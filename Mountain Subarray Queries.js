// User function Template for javascript

class Solution {
    processQueries(arr, queries) {
        const n = arr.length;
        const up = new Array(n);
        const down = new Array(n);

        up[n - 1] = n - 1;
        for (let i = n - 2; i >= 0; i--) {
            if (arr[i] <= arr[i + 1])
                up[i] = up[i + 1];
            else
                up[i] = i;
        }

        down[n - 1] = n - 1;
        for (let i = n - 2; i >= 0; i--) {
            if (arr[i] >= arr[i + 1])
                down[i] = down[i + 1];
            else
                down[i] = i;
        }

        const ans = [];
        for (const q of queries) {
            const l = q[0];
            const r = q[1];
            const peak = up[l];

            if (peak >= r || down[peak] >= r)
                ans.push(true);
            else
                ans.push(false);
        }

        return ans;
    }
}