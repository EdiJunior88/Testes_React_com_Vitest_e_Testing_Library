import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

const buttonTestID = "button";

describe("Button", () => {
  // beforeEach(() => {
  //   render(<Button>Ei, clique em mim</Button>);
  // });

  test("Deve ser capaz de renderizar o botão", () => {
    const { getByTestId } = render(<Button>Ei, clique em mim</Button>);
    expect(getByTestId(buttonTestID)).toBeInTheDocument();
  });

  test("Deve ser capaz de renderizar o botão com base na propriedade children ", () => {
    const { getByTestId } = render(<Button>Ei, clique em mim</Button>);
    expect(getByTestId(buttonTestID)).toHaveTextContent("Ei, clique em mim");
  });

  test("Deve ser capaz de disparar o evento", () => {
    const handleClick = vi.fn();

    const { getByTestId } = render(
      <Button onClick={handleClick}>Ei, clique em mim</Button>
    );
    fireEvent.click(getByTestId(buttonTestID));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Deve ser capaz de ter um estilo padrão", () => {
    const { getByTestId } = render(<Button>Ei, clique em mim</Button>);
    expect(getByTestId(buttonTestID)).toHaveStyle({
      width: "100%",
      maxWidth: "380px",
      height: "40px",
      backgroundColor: "#B6E06B",
      color: "#222",
    });
  });
});
