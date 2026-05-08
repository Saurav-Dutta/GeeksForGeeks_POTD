// User function Template for javascript

class Solution {

    check(s) {
        let bal = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                bal++;
            } else if (s[i] === ')') {
                bal--;
            }

            if (bal < 0) {
                return false;
            }
        }

        return bal === 0;
    }

    validParenthesis(s) {
        let vis = new Set();
        let q = [];
        let ans = [];
        let found = false;

        q.push(s);
        vis.add(s);

        while (q.length > 0) {
            let cur = q.shift();

            if (this.check(cur)) {
                ans.push(cur);
                found = true;
            }

            if (found) continue;

            for (let i = 0; i < cur.length; i++) {

                if (cur[i] !== '(' && cur[i] !== ')') {
                    continue;
                }

                let temp = cur.substring(0, i) + cur.substring(i + 1);

                if (!vis.has(temp)) {
                    vis.add(temp);
                    q.push(temp);
                }
            }
        }

        // Sort to match expected output order
        ans.sort();

        return ans;
    }
}