class Solution {
    maxArea(height) {
        let n = height.length;
        let i = 0, j = n - 1;
        let ans = 0;

        while (i < j) {
            let width = j - i - 1;
            let area = Math.min(height[i], height[j]) * width;

            ans = Math.max(ans, area);

            if (height[i] < height[j]) {
                i++;
            } else {
                j--;
            }
        }

        return ans;
    }
}