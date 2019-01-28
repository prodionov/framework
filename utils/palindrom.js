const palindrom = array => {
  let arrayCopy = array.slice();
  if (arrayCopy.length === 1 || arrayCopy.length === 0) {
    return true;
  } else if (arrayCopy.pop() !== arrayCopy.shift()) {
    return false;
  } else {
    return palindrom(arrayCopy);
  }
};

const palindromWrapper = word => {
  let array = word
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z-]/g, "")
    .toLowerCase()
    .split("");
  if (palindrom(array)) {
    return array.length;
  } else {
    return 0;
  }
};

module.exports = { palindrom, palindromWrapper };
