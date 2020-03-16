describe("Fizzbuzz", function() {
  let fizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  describe("Fizz expectations", () => {
    it("return Fizz when 3 is reached", () => {
      expect(fizzBuzz.start(3)).toBe("Fizz");
    });

    it("returns Fizz when 6 is reached", () => {
      expect(fizzBuzz.start(6)).toBe("Fizz");
    });
  });

  describe("Buzz expectations", () => {
    it("return Buzz when 5 is reached", () => {
      expect(fizzBuzz.start(5)).toBe("Buzz");
    });

    it("return Buzz when 25 is reached", () => {
      expect(fizzBuzz.start(25)).toBe("Buzz");
    });
  });

  describe("FizzBuzz expectations", () => {
    it("return FizzBuzz when 15 is reached", () => {
      expect(fizzBuzz.start(15)).toBe("FizzBuzz");
    });

    it("return FizzBuzz when 30 is reached", () => {
      expect(fizzBuzz.start(30)).toBe("FizzBuzz");
    });
  });
});
