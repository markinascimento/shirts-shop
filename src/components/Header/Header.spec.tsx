import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Header } from "./";

describe("<Header />", () => {
  test("Should be render header component on screen", () => {
    const { getByText } = render(<Header />);

    const title = getByText("Header");

    expect(title).toBeInTheDocument();
  });

  test("Should be open itens-cart", async () => {
    render(<Header />);

    const cartButton = screen.getByTestId("button-cart");
    fireEvent.click(cartButton);

    const itensCart = await screen.findByTestId("itens-cart");
    expect(itensCart).toBeInTheDocument();
  });
});
