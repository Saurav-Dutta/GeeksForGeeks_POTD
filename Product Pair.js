class Solution {
    isProduct(arr, target) {
        let st = new Set();

        for (let it of arr) {

            if (
                (it !== 0 &&
                 target % Math.abs(it) === 0 &&
                 st.has(target / it)) ||

                (it === 0 && target === 0)
            ) {
                return true;
            }

            st.add(it);
        }

        return false;
    }
}