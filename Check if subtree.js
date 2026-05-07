// User function Template for javascript

class Solution {
    lvl(root) {
        let ans = "";
        let q = [];
        
        q.push(root);
        ans += root.data.toString();

        while (q.length > 0) {
            let node = q.shift();

            if (node.left) {
                ans += node.left.data.toString();
                q.push(node.left);
            } else {
                ans += 'N';
            }

            if (node.right) {
                ans += node.right.data.toString();
                q.push(node.right);
            } else {
                ans += 'N';
            }
        }

        return ans;
    }

    isSubTree(root1, root2) {
        let q = [];
        q.push(root1);

        while (q.length > 0) {
            let node = q.shift();

            if (node.data === root2.data) {
                let s1 = this.lvl(node);
                let s2 = this.lvl(root2);

                if (s1 === s2) return true;
            }

            if (node.left) {
                q.push(node.left);
            }

            if (node.right) {
                q.push(node.right);
            }
        }

        return false;
    }
}