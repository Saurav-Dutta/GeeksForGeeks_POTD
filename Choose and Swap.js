class Solution {
    chooseSwap(s) {
        let first = new Array(26).fill(-1);

        // Store first occurrence of each character
        for (let i = 0; i < s.length; i++) {
            let idx = s.charCodeAt(i) - 'a'.charCodeAt(0);

            if (first[idx] === -1) {
                first[idx] = i;
            }
        }

        // Find beneficial swap
        for (let i = 0; i < s.length; i++) {
            for (
                let chCode = 'a'.charCodeAt(0);
                chCode < s.charCodeAt(i);
                chCode++
            ) {
                let idx = chCode - 'a'.charCodeAt(0);

                if (first[idx] > i) {
                    let c1 = s[i];
                    let c2 = String.fromCharCode(chCode);

                    let result = '';

                    for (let j = 0; j < s.length; j++) {
                        if (s[j] === c1) {
                            result += c2;
                        } else if (s[j] === c2) {
                            result += c1;
                        } else {
                            result += s[j];
                        }
                    }

                    return result;
                }
            }
        }

        return s;
    }
}