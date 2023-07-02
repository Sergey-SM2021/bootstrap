import { classNames } from "./classNames"

describe("classnames", () => {
	it("invoke with one argument", () => {
		expect(classNames("sergey")).toBe("sergey")
	})

	it("invoke with additional array argument", () => {
		expect(classNames("sergey", {}, ["andrey"])).toBe("sergey andrey")
	})

	it("invoke with mods", () => {
		expect(classNames("sergey", { andrey: false, olga: true }, [])).toBe(
			"sergey olga"
		)
	})
})
