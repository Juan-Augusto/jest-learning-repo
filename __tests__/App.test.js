import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App.js";

test("button has correct initial color", () => {
  render(<App />);
  const linkElement = screen.getByRole("button", {
    name: /click to turn gray/i,
  });
  expect(linkElement).toHaveStyle({
    "background-color": "red",
  });
});
