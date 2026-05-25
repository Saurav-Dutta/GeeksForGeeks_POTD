class Solution {
    checkElements(start, end, arr) {
        let st = new Set(arr);

        for (let i = start; i <= end; i++) {
            if (!st.has(i)) {
                return false;
            }
        }

        return true;
    }
}