import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "./page";

describe("<Home/>", () => {
  test("Should render homepage", () => {
    const { getByRole } = render(<Home />);

    const title = getByRole("heading", {
      name: "Hey, its working!",
    });

    expect(title).toBeInTheDocument();
  });
});
