import { expect, test } from "@jest/globals";
import calculator from "../code/calculator";

test("Adds 2 and 4 to equal 6", () => {
    expect(calculator.add(2, 4)).toBe(6);
});

test("Subtracts 2 and 4 to equal -2", () => {
    expect(calculator.subtract(2, 4)).toBe(-2);
});

test("Multiplies 2 and 4 to equal 8", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});

test("Divides 2 and 4 to equal 0.5", () => {
    expect(calculator.divide(2, 4)).toBe(0.5);
});