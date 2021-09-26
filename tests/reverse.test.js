import { expect, test } from "@jest/globals";
import reverse from "../code/reverse";

test("changes 'Testing' to 'gnitseT'", () => {
    expect(reverse("Testing")).toBe("gnitseT");
});