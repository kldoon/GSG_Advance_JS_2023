// question link : https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript?authuser=0
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let s = "";
  for (let ch of str) {
    if (!vowels.includes(ch.toLowerCase())) s += ch;
  }
  return s;
}
