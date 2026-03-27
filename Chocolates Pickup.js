// Chocolates Pickup

class Solution {
  constructor() {
    this.moves = [-1, 0, 1];
    this.dp = [];
  }

  solve(grid, row, c1, c2) {
    let m = grid[0].length;

    // Out of bounds
    if (c1 < 0 || c1 >= m || c2 < 0 || c2 >= m) {
      return -Infinity;
    }

    let curr = grid[row][c1];
    if (c1 !== c2) curr += grid[row][c2];

    // Last row
    if (row === grid.length - 1) {
      return curr;
    }

    // Memoization check
    if (this.dp[row][c1][c2] !== -1) {
      return this.dp[row][c1][c2];
    }

    let res = -Infinity;

    // Try all 9 combinations
    for (let i of this.moves) {
      for (let j of this.moves) {
        res = Math.max(
          res,
          this.solve(grid, row + 1, c1 + i, c2 + j)
        );
      }
    }

    this.dp[row][c1][c2] = res + curr;
    return this.dp[row][c1][c2];
  }

  maxChocolate(grid) {
    let n = grid.length;
    let m = grid[0].length;

    // 3D DP initialization
    this.dp = Array.from({ length: n }, () =>
      Array.from({ length: m }, () =>
        new Array(m).fill(-1)
      )
    );

    return this.solve(grid, 0, 0, m - 1);
  }
}