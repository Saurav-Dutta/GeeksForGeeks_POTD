class Solution {
    maxPeopleDefeated(p) {
        let low = 1;
        let high = 1000;
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            let x = (mid * (mid + 1) * (2 * mid + 1)) / 6;

            if (x > p) {
                high = mid - 1;
            } else {
                ans = mid;
                low = mid + 1;
            }
        }

        return ans;
    }
}