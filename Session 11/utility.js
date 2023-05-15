const PI = 3.1415;

const capitalizeFirstWord = (str) => {
  const parts = str.split(' ');
  const [firstPart, ...other] = parts;
  return `${firstPart.toUpperCase()} ${other.join(" ")}`;
};

const replaceStr = (str, char, replacer) => {
  const regex = new RegExp(char, "g")
  const replaced = str.replace(regex, replacer)
  return replaced
}

module.exports = {
  capitalizeFirstWord,
  replaceStr,
  PI
}

// exports = {
//   capitalizeFirstWord,
//   replaceStr
// }

// module.exports.capitalizeFirstWord = capitalizeFirstWord;
// module.exports.replaceStr = replaceStr;