class Solution {
    #findLCA(root, p, q) {
        if (!root || root.data === p || root.data === q) {
            return root;
        }
        let leftLCA = this.#findLCA(root.left, p, q);
        let rightLCA = this.#findLCA(root.right, p, q);
        if (leftLCA && rightLCA) {
            return root;
        }
        return leftLCA ? leftLCA : rightLCA;
    }

    #getPath(root, target, pathArr) {
        if (!root) {
            return false;
        }
        if (root.data === target) {
            return true;
        }
        
        pathArr.push('L');
        if (this.#getPath(root.left, target, pathArr)) {
            return true;
        }
        pathArr.pop();
        
        pathArr.push('R');
        if (this.#getPath(root.right, target, pathArr)) {
            return true;
        }
        pathArr.pop();
        
        return false;
    }

    #countTurns(pathArr) {
        let turns = 0;
        for (let i = 0; i + 1 < pathArr.length; i++) {
            if (pathArr[i] !== pathArr[i + 1]) {
                turns++;
            }
        }
        return turns;
    }

    numberOfTurns(root, p, q) {
        if (!root || p === q) {
            return -1;
        }
        
        let lca = this.#findLCA(root, p, q);
        if (!lca) {
            return -1;
        }
        
        if (lca.data === p) {
            let pathArr = [];
            this.#getPath(lca, q, pathArr);
            let turns = this.#countTurns(pathArr);
            return (turns === 0) ? -1 : turns;
        }
        
        if (lca.data === q) {
            let pathArr = [];
            this.#getPath(lca, p, pathArr);
            let turns = this.#countTurns(pathArr);
            return (turns === 0) ? -1 : turns;
        }
        
        let pathToP = [];
        let pathToQ = [];
        this.#getPath(lca, p, pathToP);
        this.#getPath(lca, q, pathToQ);
        
        let turns = this.#countTurns(pathToP) + this.#countTurns(pathToQ) + 1;
        return (turns === 0) ? -1 : turns;
    }
}
