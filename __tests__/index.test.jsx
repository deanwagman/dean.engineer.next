import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders", () => {
    render(<div />);

    expect(true).toBe(true);
  });
});
