// User function Template for javascript

class Solution {
    countCoordinates(mat) {
        const n = mat.length;
        const m = mat[0].length;

        const reachP = Array.from({ length: n }, () => Array(m).fill(false));
        const reachQ = Array.from({ length: n }, () => Array(m).fill(false));

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, 1, -1];

        const dfs = (sources, visited) => {
            const st = [];

            for (const [r, c] of sources) {
                if (!visited[r][c]) {
                    visited[r][c] = true;
                    st.push([r, c]);
                }
            }

            while (st.length > 0) {
                const [r, c] = st.pop();

                for (let d = 0; d < 4; d++) {
                    const nr = r + dr[d];
                    const nc = c + dc[d];

                    if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
                    if (visited[nr][nc]) continue;
                    if (mat[nr][nc] < mat[r][c]) continue;

                    visited[nr][nc] = true;
                    st.push([nr, nc]);
                }
            }
        };

        const sourcesP = [];
        for (let j = 0; j < m; j++) sourcesP.push([0, j]);
        for (let i = 0; i < n; i++) sourcesP.push([i, 0]);

        const sourcesQ = [];
        for (let j = 0; j < m; j++) sourcesQ.push([n - 1, j]);
        for (let i = 0; i < n; i++) sourcesQ.push([i, m - 1]);

        dfs(sourcesP, reachP);
        dfs(sourcesQ, reachQ);

        let answer = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (reachP[i][j] && reachQ[i][j]) {
                    answer++;
                }
            }
        }

        return answer;
    }
}