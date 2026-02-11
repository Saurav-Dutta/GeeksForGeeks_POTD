class Solution {
  isPossible(mid, arr, cost) {
    let midi = 0;
    let midiWithOne = 0;

    for (let i = 0; i < arr.length; i++) {
      midi += Math.abs(arr[i] - mid) * cost[i];
      midiWithOne += Math.abs(arr[i] - (mid + 1)) * cost[i];
    }

    return midi < midiWithOne;
  }

  minCost(heights, cost) {
    let s = 1;
    let e = Math.max(...heights);
    let mini = 0;

    while (s <= e) {
      let mid = Math.floor((s + e) / 2);

      if (this.isPossible(mid, heights, cost)) {
        mini = mid;
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }

    let ans = 0;

    for (let i = 0; i < cost.length; i++) {
      ans += Math.abs(heights[i] - mini) * cost[i];
    }

    return ans;
  }
}
