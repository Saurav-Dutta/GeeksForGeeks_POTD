class Solution {
  orangesRot(mat) {
    let n = mat.length;
    let m = mat[0].length;

    let q = [];
    let head = 0; // pointer to avoid shift()
    let fresh = 0;

    // Initialize queue with rotten oranges & count fresh
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (mat[i][j] === 2) {
          q.push([i, j]);
        } else if (mat[i][j] === 1) {
          fresh++;
        }
      }
    }

    if (fresh === 0) return 0;

    let time = 0;

    while (head < q.length) {
      let curr_rotten = q.length - head;
      let rottenThisRound = false;

      while (curr_rotten--) {
        let [x, y] = q[head++];

        let dirs = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1]
        ];

        for (let [dx, dy] of dirs) {
          let nx = x + dx;
          let ny = y + dy;

          if (
            nx >= 0 && nx < n &&
            ny >= 0 && ny < m &&
            mat[nx][ny] === 1
          ) {
            mat[nx][ny] = 2;
            fresh--;
            q.push([nx, ny]);
            rottenThisRound = true;
          }
        }
      }

      if (rottenThisRound) time++;
    }

    return fresh === 0 ? time : -1;
  }
}