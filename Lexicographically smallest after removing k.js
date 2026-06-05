class Solution {
    lexicographicallySmallest(s, k) {
        const size = s.length;
        let ans = "";

        k = ((size & (size - 1)) === 0) ? (k >> 1) : (k << 1);

        if (k >= size) {
            return "-1";
        }

        const st = [];

        for (let i = 0; i < size; i++) {
            while (st.length > 0 && k > 0 && st[st.length - 1] > s[i]) {
                st.pop();
                k--;
            }
            st.push(s[i]);
        }

        while (k > 0) {
            st.pop();
            k--;
        }

        while (st.length > 0) {
            ans += st.pop();
        }

        return ans.split("").reverse().join("");
    }
}