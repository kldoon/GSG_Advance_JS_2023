export const PI = 3.1415;

export const capitalizeFirstWord = (str) => {
  const parts = str.split(' ');
  const [firstPart, ...other] = parts;
  return `${firstPart.toUpperCase()} ${other.join(" ")}`;
};

export const replaceStr = (str, char, replacer) => {
  const regex = new RegExp(char, "g")
  const replaced = str.replace(regex, replacer)
  return replaced
}

const sum = (x, y) => x + y;

export default sum;

// export {
//   PI,
//   capitalizeFirstWord,
//   replaceStr
// }
