// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("divide", function () {
  it("should be defined", function () {
    expect(divide).toBeDefined();
  });

  it("should take  arguments", function () {
    expect(divide(10, 2)).toBeDefined();
  });

  it("should return the division ", function () {
    expect(divide(10, 2)).toEqual(5);
    expect(divide(15, 3)).toEqual(5);
    expect(divide(-10, 2)).toEqual(-5);
  });

  it("should return undefined ", function () {
    expect(divide(10)).toBeUndefined();
    expect(divide()).toBeUndefined();
  });

  it("should return undefined", function () {
    expect(divide("10", 2)).toBeUndefined();
    expect(divide(10, "2")).toBeUndefined();
    expect(divide("10", "2")).toBeUndefined();
  });
});

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return undefined;
  }
  if (b === 0) {
    return undefined;
  }
  return a / b;
}
