import { expect, test } from "@jest/globals";
import caesar from "../code/cipher";

test("Shifting 'abc' by 5 equals 'fgh'", () => {
    expect(caesar("abc", 5)).toBe("fgh");
});

test("Can loop back around to the start of the alphabet when shifting (shifting 'z' by 1 equals 'a')", () => {
    expect(caesar("z", 1)).toBe("a");
});

test("Preserves uppercase letters (shifting 'Aa' by 1 equals 'Bb')", () => {
    expect(caesar("Aa", 1)).toBe("Bb");
});

test("Preserves symbols (shifting 'a?!' by 1 equals 'b?!')", () => {
    expect(caesar("a?!", 1)).toBe("b?!")
});