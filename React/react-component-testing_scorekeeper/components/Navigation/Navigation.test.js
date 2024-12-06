import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: "." };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />); // Navigations Componente rendern

  // element mit role(link) mit dem namen Play finden.../play/i =egal Ob groß oder klein.
  const playLink = screen.getByRole("link", { name: /Play/i });
  expect(playLink).toBeInTheDocument(); // überprüfen ob der text tasächlich play ist.

  // überprüfen ob Link mit dem text "History" gerendert wurde und im dom ist.
  const historyLink = screen.getByRole("link", { name: /History/i });
  expect(historyLink).toBeInTheDocument();
});
