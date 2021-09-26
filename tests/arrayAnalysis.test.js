import { expect, test } from "@jest/globals";
import analyze from "../code/arrayAnalysis";

test("The average of [2, 1, 3] is 2", () => {
    expect(analyze([2, 1, 3]).average).toBe(2);
});

test("The min of [2, 1, 3] is 1", () => {
    expect(analyze([2, 1, 3]).min).toBe(1);
});

test("The max of [2, 1, 3] is 3", () => {
    expect(analyze([2, 1, 3]).max).toBe(3);
});

test("The length of [2, 1, 3] is 3", () => {
    expect(analyze([2, 1, 3]).length).toBe(3);
});