import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { ItensCart } from ".";

describe("<ItensCart />", () => {
  test("Should not be render on screen", () => {
    render(<ItensCart isOpen={false} onClose={() => {}} />);

    const container = screen.getByTestId("itens-cart");

    expect(container).toHaveClass("right-[-100%]");
  });

  test("Should be render on screen", () => {
    render(<ItensCart isOpen onClose={() => {}} />);

    const container = screen.getByTestId("itens-cart");

    expect(container).toHaveClass("right-0");
  });

  test("Should be click in close button", async () => {
    const onClick = vi.fn();
    const { getByRole } = render(<ItensCart isOpen={true} onClose={onClick} />);

    const closeButton = getByRole("button");
    fireEvent.click(closeButton);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
