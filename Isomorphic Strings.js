class Solution {
  areIsomorphic(s1, s2) {
    if (s1.length !== s2.length) return false;

    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < s1.length; i++) {
      let c1 = s1[i];
      let c2 = s2[i];

      if ((map1.has(c1) && map1.get(c1) !== c2) ||
          (map2.has(c2) && map2.get(c2) !== c1)) {
        return false;
      }

      map1.set(c1, c2);
      map2.set(c2, c1);
    }

    return true;
  }
}