describe("Auth flow", () => {
	
	it.only("logined user can visit private page", () => {
		cy.visit("http://localhost:8081/")
		
		cy.url().should("equal", "http://localhost:8081/")

		cy.visit("http://localhost:8081/articles")

		cy.contains(/войти/i).click()

		cy.get("input").eq(0).type("sergey2003.k.96@gmail.com")

		cy.get("input").eq(1).type("sergey2003")

		cy.get("button").contains(/войти/i).click()

		cy.contains(/войти/i).should("not.exist")

		cy.visit("http://localhost:8081/articles")

		cy.url().should("equal", "http://localhost:8081/articles")
	})

	it("logout work correctly", () => {
		cy.visit("http://localhost:8081/")

		cy.contains(/войти/i).click()

		cy.get("input").eq(0).type("sergey2003.k.96@gmail.com")

		cy.get("input").eq(1).type("sergey2003")

		cy.get("button").contains(/войти/i).click()

		cy.contains(/войти/i).should("not.exist")

		cy.get("img").click()

		cy.contains(/выйти/i).click()

		cy.contains(/войти/i)
	})
})
