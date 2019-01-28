const { palindrom } = require("../palindrom");

describe("palindrom func returns correct results", () => {
  test("an array with one letter ['t'] returns true", () => {
    expect(palindrom(["t"])).toBe(true);
  });
  test("empty array returns true", () => {
    expect(palindrom([])).toBe(true);
  });
  test("['h', 'e','l','p'] return false ", () => {
    const result = palindrom(["h", "e", "l", "p"]);
    expect(result).toBe(false);
  });
  test(`['a', 'n', 'n', 'a']`, () => {
    const result = palindrom(["a", "n", "n", "a"]);
    expect(result).toBe(true);
  });
});
