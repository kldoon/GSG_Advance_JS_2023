// question link : https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript
function secondSymbol(s, symbol) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == symbol) {
      counter++;
      if (counter > 1) return i;
    }
  }
  return -1;
}
