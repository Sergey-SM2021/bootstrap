import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { render, screen } from "@testing-library/react"

describe("appButton", () => {
	it("render succecc", () => {
		// eslint-disable-next-line i18next/no-literal-string
		render(<AppButton theme={AppButtonTheme.primary}>кнопка</AppButton>)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})
})
