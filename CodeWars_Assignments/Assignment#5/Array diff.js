// question link : https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (b[i] === a[j]) {
        a.splice(j, 1);
        j--;
      }
    }
  }
  return a;
}
