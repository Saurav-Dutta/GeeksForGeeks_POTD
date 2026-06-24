// User template for JavaScript

class Solution {
    constructor() {
        this.n = 0;
        this.path = [];
        this.dead = [];
    }

    solve(i, j, mat) {
        if (i >= this.n || j >= this.n || mat[i][j] === 0)
            return false;

        if (this.dead[i][j])
            return false;

        if (i === this.n - 1 && j === this.n - 1) {
            this.path[i][j] = 1;
            return true;
        }

        this.path[i][j] = 1;

        let maxJump = mat[i][j];

        for (let step = 1; step <= maxJump; step++) {

            // Move right
            if (this.solve(i, j + step, mat))
                return true;

            // Move down
            if (this.solve(i + step, j, mat))
                return true;
        }

        this.path[i][j] = 0;
        this.dead[i][j] = 1;

        return false;
    }

    shortestDist(mat) {
        this.n = mat.length;

        this.path = Array.from({ length: this.n }, () =>
            Array(this.n).fill(0)
        );

        this.dead = Array.from({ length: this.n }, () =>
            Array(this.n).fill(0)
        );

        if (this.solve(0, 0, mat))
            return this.path;

        return [[-1]];
    }
}