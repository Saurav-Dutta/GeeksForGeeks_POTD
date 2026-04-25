class Solution {
  reducePairs(arr) {
    let st = [];

    for (let i = 0; i < arr.length; i++) {
      st.push(arr[i]);

      while (st.length >= 2) {
        let t1 = st.pop();
        let t2 = st.pop();

        // Opposite signs
        if ((t1 < 0 && t2 > 0) || (t2 < 0 && t1 > 0)) {
          if (Math.abs(t1) > Math.abs(t2)) st.push(t1);
          if (Math.abs(t2) > Math.abs(t1)) st.push(t2);
          // If equal, both disappear
        } else {
          st.push(t2);
          st.push(t1);
          break;
        }
      }
    }

    return st;
  }
}