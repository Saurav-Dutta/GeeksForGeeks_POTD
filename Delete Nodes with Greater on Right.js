class Solution {
    compute(head) {
        let temp = head;
        let forward;
        let curr = null;
        let n = 0;

        // Reverse the linked list
        while (temp.next !== null) {
            n++;
            forward = temp.next;
            temp.next = curr;
            curr = temp;
            temp = forward;
        }
        n++;
        temp.next = curr;

        let hum = temp;
        let r = new Array(n);

        let maximum = hum.data;
        let k = 0;

        while (k < n) {
            maximum = Math.max(maximum, hum.data);
            r[k] = maximum;
            k++;
            hum = hum.next;
        }

        // Reverse again to restore original order
        let forward1;
        let curr1 = null;

        while (temp.next !== null) {
            forward1 = temp.next;
            temp.next = curr1;
            curr1 = temp;
            temp = forward1;
        }
        temp.next = curr1;

        let humHai = temp;
        let temp5 = temp;

        let t = n - 1;
        let konHo;
        let pcount = 0;
        let rcount = 0;

        while (temp5 !== null) {
            pcount++;

            if (temp5.data >= r[t]) {
                rcount++;

                if (rcount === 1) {
                    head = temp5;
                }

                t--;

                if (pcount > 1) {
                    humHai = humHai.next;
                }

                temp5 = temp5.next;
            } else {
                t--;

                konHo = temp5.next;

                if (pcount > 1) {
                    humHai.next = temp5.next;
                }

                temp5 = konHo;
            }
        }

        return head;
    }
}