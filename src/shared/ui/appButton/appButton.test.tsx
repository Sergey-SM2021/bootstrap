import { AppButton, AppButtonTheme } from "shared/ui/appButton/appButton";
import { render, screen } from "@testing-library/react";

describe("classnames", () => {
  it("invoke with one argument", () => {
    render(<AppButton theme={AppButtonTheme.primary}>кнопка</AppButton>);
    expect(screen.getByRole("button")).toBeInTheDocument()
  });
});
