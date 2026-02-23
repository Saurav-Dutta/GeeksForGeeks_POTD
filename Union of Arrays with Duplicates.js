class Solution {
  findUnion(a, b) {
    // Create a Set from first array
    let st = new Set(a);

    // Insert elements from second array
    for (let num of b) {
      st.add(num);
    }

    // Convert Set back to Array
    return Array.from(st);
  }
}