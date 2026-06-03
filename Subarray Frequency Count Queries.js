class Solution {
    freqInRange(arr, queries) {
        const mp = new Map();
        const ans = [];

        // Store indices for each value
        for (let i = 0; i < arr.length; i++) {
            if (!mp.has(arr[i])) {
                mp.set(arr[i], []);
            }
            mp.get(arr[i]).push(i);
        }

        // Binary search: first index >= target
        const lowerBound = (nums, target) => {
            let left = 0, right = nums.length;
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (nums[mid] < target) left = mid + 1;
                else right = mid;
            }
            return left;
        };

        // Binary search: first index > target
        const upperBound = (nums, target) => {
            let left = 0, right = nums.length;
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (nums[mid] <= target) left = mid + 1;
                else right = mid;
            }
            return left;
        };

        for (let i = 0; i < queries.length; i++) {
            const [l, r, x] = queries[i];

            if (!mp.has(x)) {
                ans.push(0);
                continue;
            }

            const indices = mp.get(x);
            const low = lowerBound(indices, l);
            const high = upperBound(indices, r);

            ans.push(high - low);
        }

        return ans;
    }
}