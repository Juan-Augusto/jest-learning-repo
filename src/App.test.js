import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const linkElement = screen.getByRole("button", {
    name: /click to turn gray/i,
  });
  expect(linkElement).toHaveStyle({
    "background-color": "red",
  });
});
test("button has correct text", () => {
  render(<App />);
  const linkElement = screen.getByRole("button", {
    name: /click to turn gray/i,
  });
  expect(linkElement).toHaveTextContent("Click to turn gray");
});
test("button has correct text after click", () => {
  render(<App />);
  const linkElement = screen.getByRole("button", {
    name: /click to turn gray/i,
  });
  fireEvent.click(linkElement);
  expect(linkElement).toHaveTextContent("Click to turn red");
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

describe("Replace camel case with spaces", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
