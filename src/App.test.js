import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const linkElement = screen.getByRole("button", {
    name: /click to turn red/i,
  });
  expect(linkElement).toHaveStyle({
    "background-color": "blue",
  });
});
test("button has correct text", () => {
  render(<App />);
  const linkElement = screen.getByRole("button", {
    name: /click to turn red/i,
  });
  expect(linkElement).toHaveTextContent("Click to turn red");
});
test("button has correct text after click", () => {
  render(<App />);
  const linkElement = screen.getByRole("button", {
    name: /click to turn red/i,
  });
  fireEvent.click(linkElement);
  expect(linkElement).toHaveTextContent("Click to turn blue");
});
test("checkbox to be initalized checked", () => {
  render(<App />);
  const linkElement = screen.getByRole("checkbox");
  expect(linkElement).toBeEnabled();
});
test("checkbox to be checked after click and unchecked after second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(checkbox).toBeDisabled();

  fireEvent.click(button);
  expect(checkbox).toBeEnabled();
});
