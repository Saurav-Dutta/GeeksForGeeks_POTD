class Solution {
    maxTask(h, l) {
        const n = h.length;

        let pl = l[0];
        let ph = h[0];
        let pn = 0;

        let cl = 0, ch = 0, cn = 0;
        let res = Math.max(pl, ph, pn);

        for (let i = 1; i < n; i++) {
            cl = l[i] + Math.max(ph, pl, pn);
            ch = h[i] + pn;
            cn = Math.max(ph, pl, pn);

            ph = ch;
            pl = cl;
            pn = cn;
        }

        res = Math.max(res, ch, cl, cn);
        return res;
    }
}