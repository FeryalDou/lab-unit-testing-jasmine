// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should calculate the area of a rectangle with given x and y", () => {});

    it("should calculate the area of a square with given side length", () => {});

    it("should return undefined if width or height is not provided", () => {});

    it("should return undefined if width or height is not a number", () => {});

    it("should return undefined if width or height is negative", () => {});

    it("should return undefined if width or height is zero", () => {});
  });
});

function calculateArea(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return undefined;
  }
  return x * y;
}
