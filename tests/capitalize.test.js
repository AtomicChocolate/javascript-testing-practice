import { expect, test } from "@jest/globals";
import capitalize from "../code/capitalize";

test("changes 'joe' to 'Joe'", () => {
    expect(capitalize("joe mama")).toBe("Joe mama");
});

test("does not change special characters", () => {
    expect(capitalize("/joe")).toBe("/joe");
});