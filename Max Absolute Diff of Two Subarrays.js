class Solution {
    maxDiffSubArrays(arr) {
        const n = arr.length;
        const leftMax = new Array(n);
        const rightMax = new Array(n);
        const leftMin = new Array(n);
        const rightMin = new Array(n);

        let cur = arr[0];
        leftMax[0] = arr[0];
        for (let i = 1; i < n; i++) {
            cur = Math.max(arr[i], cur + arr[i]);
            leftMax[i] = Math.max(leftMax[i - 1], cur);
        }

        cur = arr[n - 1];
        rightMax[n - 1] = arr[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            cur = Math.max(arr[i], cur + arr[i]);
            rightMax[i] = Math.max(rightMax[i + 1], cur);
        }

        cur = arr[0];
        leftMin[0] = arr[0];
        for (let i = 1; i < n; i++) {
            cur = Math.min(arr[i], cur + arr[i]);
            leftMin[i] = Math.min(leftMin[i - 1], cur);
        }

        cur = arr[n - 1];
        rightMin[n - 1] = arr[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            cur = Math.min(arr[i], cur + arr[i]);
            rightMin[i] = Math.min(rightMin[i + 1], cur);
        }

        let ans = 0;
        for (let i = 0; i < n - 1; i++) {
            ans = Math.max(ans, Math.abs(leftMax[i] - rightMin[i + 1]));
            ans = Math.max(ans, Math.abs(leftMin[i] - rightMax[i + 1]));
        }

        return ans;
    }
}