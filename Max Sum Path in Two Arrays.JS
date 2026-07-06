class Solution {
    maxPathSum(a, b) {
        let n1 = a.length, n2 = b.length;
        let i = 0, j = 0;
        let sum1 = 0, sum2 = 0, result = 0;

        while (i < n1 && j < n2) {
            if (a[i] === b[j]) {
                result += Math.max(sum1, sum2) + a[i];
                i++;
                j++;
                sum1 = 0;
                sum2 = 0;
            } else if (a[i] < b[j]) {
                sum1 += a[i++];
            } else {
                sum2 += b[j++];
            }
        }

        while (i < n1) {
            sum1 += a[i++];
        }

        while (j < n2) {
            sum2 += b[j++];
        }

        return result + Math.max(sum1, sum2);
    }
}