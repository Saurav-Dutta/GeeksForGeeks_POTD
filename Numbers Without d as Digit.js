class Solution {
    countWithout(n, d) {
        const s = n.toString();

        // dp[tight][started]
        let dp = [
            [0, 0],
            [1, 0]
        ];

        for (const current of s) {
            const next = [
                [0, 0],
                [0, 0]
            ];

            for (let tight = 0; tight <= 1; tight++) {
                for (let started = 0; started <= 1; started++) {
                    if (dp[tight][started] === 0) continue;

                    const limit = tight ? Number(current) : 9;

                    for (let digit = 0; digit <= limit; digit++) {
                        const nextStarted = started || digit !== 0;

                        if (nextStarted && digit === d) continue;

                        const nextTight = (tight && digit === limit) ? 1 : 0;
                        next[nextTight][nextStarted ? 1 : 0] += dp[tight][started];
                    }
                }
            }

            dp = next;
        }

        return dp[0][1] + dp[1][1];
    }
}