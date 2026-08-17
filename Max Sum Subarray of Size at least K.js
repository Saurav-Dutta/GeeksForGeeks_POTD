class Solution {
    maxSumWithK(arr, k) {
        let sum1 = 0;
        const pre = [];

        for (let i = 0; i < arr.length; i++) {
            sum1 += arr[i];
            pre.push(sum1);
        }

        let ma = -Infinity;
        const v = new Array(pre.length);

        for (let i = pre.length - 1; i >= 0; i--) {
            ma = Math.max(ma, pre[i]);
            v[i] = ma;
        }

        let maxi = -Infinity;
        let sum = 0;

        for (let i = 0; i < k; i++) {
            sum += arr[i];
        }

        maxi = Math.max(maxi, sum);

        if (k < arr.length) {
            maxi = Math.max(maxi, sum + v[k] - pre[k - 1]);
        }

        let j = 0;

        for (let i = k; i < arr.length; i++) {
            sum -= arr[j];
            sum += arr[i];

            maxi = Math.max(maxi, sum);

            if (i + 1 < arr.length) {
                maxi = Math.max(maxi, sum + v[i + 1] - pre[i]);
            }

            j++;
        }

        return maxi;
    }
}