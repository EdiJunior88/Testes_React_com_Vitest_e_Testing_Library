import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import App from "./App";

// O App está renderizando
describe("App", () => {
  test("Deve ser capaz de ver o texto inicial na tela", () => {
    // const { debug } = render(<App />);
    // debug();

    const { getByText } = render(<App />);
    expect(getByText("Hey, isso tá funcionando!")).toBeInTheDocument();
  });
});
