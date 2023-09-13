describe("Auth flow", () => {
	beforeEach(() => {
		cy.login()
	})

	it("logined user can visit private page", () => {
		cy.visit(`${Cypress.config().baseUrl}articles`)

		cy.contains(/войти/i).should("not.exist")

		cy.visit(`${Cypress.config().baseUrl}articles`)

		cy.url().should("equal", `${Cypress.config().baseUrl}articles`)
	})

	it("logout work correctly", () => {
		cy.visit("/")

		cy.contains(/войти/i).should("not.exist")

		cy.get("img").click()

		cy.contains(/выйти/i).click()

		cy.contains(/войти/i)
	})
})
