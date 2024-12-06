import { add } from "./index.js";

test("returns 5 if called with add(2, 3)", () => {
  expect(add(2, 3)).toBe(5);
});
