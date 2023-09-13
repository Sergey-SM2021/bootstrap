import { USER_LOCALSTORAGE_NAME } from "../../src/shared/const/localstorage"

Cypress.Commands.add(
	"login",
	(login = "sergey2003.k.96@gmail.com", password = "sergey2003") => {
		cy.request({
			method: "POST",
			body: {
				login,
				password,
			},
			url: "http://localhost:4200/api/auth/login",
		}).then(({body}) => localStorage.setItem(USER_LOCALSTORAGE_NAME, JSON.stringify(body)))
	}
)

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>;
    }
  }
}

export {}
