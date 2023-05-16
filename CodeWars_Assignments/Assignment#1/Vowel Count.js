// question link : https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
  let cnt = 0;
  const arr = ["a", "e", "i", "o", "u"];
  for (let i in str) {
    if (arr.includes(str[i])) cnt++;
  }
  return cnt;
}
