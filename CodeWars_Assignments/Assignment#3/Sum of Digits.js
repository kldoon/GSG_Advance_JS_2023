// question link : https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript?authuser=0
function digitalRoot(n) {
  while (n > 9) {
    let temp = 0;
    while (n != 0) {
      temp += n % 10;
      n = Math.floor(n / 10);
    }
    n = temp;
  }
  return n;
}
