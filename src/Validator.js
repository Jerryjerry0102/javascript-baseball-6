class Validator {
  static isLength(min, max, array) {
    return min <= array.length && array.length <= max;
  }
  static isUnique(array) {
    return array.length === new Set(array).size;
  }
  static isNumberArray(array) {
    return array.every((v) => typeof v === "number");
  }
}

export default Validator;
