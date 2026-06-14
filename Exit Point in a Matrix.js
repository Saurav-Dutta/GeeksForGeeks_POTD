class Solution {
    exitPoint(mat) {
        let x = -1, y = -1;
        let currx = 0, curry = 0;

        const arr = [0, 1, 0, -1, 0];
        let curr = 0;

        while (
            currx < mat.length &&
            curry < mat[0].length &&
            currx >= 0 &&
            curry >= 0
        ) {
            x = currx;
            y = curry;

            if (mat[x][y] === 0) {
                currx += arr[curr];
                curry += arr[curr + 1];
            } else {
                mat[x][y] = 0;
                curr = (curr + 1) % 4;
                currx += arr[curr];
                curry += arr[curr + 1];
            }
        }

        return [x, y];
    }
}