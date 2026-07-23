class Solution {
    canRepresentBST(arr) {
        let st = [];
        let lowerBound = -Infinity;

        for (let value of arr) {
            if (value < lowerBound) {
                return false;
            }

            while (st.length > 0 && value > st[st.length - 1]) {
                lowerBound = st.pop();
            }

            st.push(value);
        }

        return true;
    }
}