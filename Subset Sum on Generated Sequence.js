class Solution {
    isPossible(arr, s, x) {
        let nums = [];
        nums.push(BigInt(s));

        let sum = BigInt(s);
        let limit = BigInt(x);

        for (let a of arr) {
            let next = sum + BigInt(a);
            if (next > limit) break;
            nums.push(next);
            sum += next;
        }

        let remaining = limit;

        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] <= remaining) {
                remaining -= nums[i];
            }
            if (remaining === 0n) {
                return true;
            }
        }

        return false;
    }
}