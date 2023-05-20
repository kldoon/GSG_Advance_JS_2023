// question link : https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string) {
  const words = string.split(" ");
  for (let i in words) {
    if (words[i].length >= 5) {
      words[i] = [...words[i]].reverse().join("");
    }
  }
  return words.join(" ");
}
