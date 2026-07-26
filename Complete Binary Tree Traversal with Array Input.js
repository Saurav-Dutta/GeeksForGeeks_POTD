class Solution {
    levelSort(arr) {
        const ans = [];
        const n = arr.length;
        let index = 0;
        let levelSize = 1;

        while (index < n) {
            const level = [];

            for (let i = 0; i < levelSize && index < n; i++) {
                level.push(arr[index]);
                index++;
            }

            level.sort((a, b) => a - b);
            ans.push(level);

            levelSize *= 2;
        }

        return ans;
    }
}