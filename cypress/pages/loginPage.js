class loginPage {
    selectorsList() {
        const selectors = {
            genericButton: 'button',
            usernamePlaceholder: "[data-cy='email']",
            passwordPlaceholder: "[data-cy='password']",
            loginFail: '.p-8',
            headerWithLogout: '.max-w-6xl'
            
        }  
            return selectors
     }

    accessLoginPage() {
        cy.visit('http://localhost:3000/')
    }

    loginButton() {
        cy.get(this.selectorsList().genericButton).contains('Login').click()
    }
    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernamePlaceholder).type(username)
        cy.get(this.selectorsList().passwordPlaceholder).type(password)
        cy.get(this.selectorsList().genericButton).contains('Sign in').click()
        
    }
    loginWithoutUser(password) {
        cy.get(this.selectorsList().passwordPlaceholder).type(password)
        cy.get(this.selectorsList().genericButton).contains('Sign in').click()
        
    }
    loginWithoutPassword(username, password) {
        cy.get(this.selectorsList().usernamePlaceholder).type(username)
        cy.get(this.selectorsList().genericButton).contains('Sign in').click()
        
    }

    loginWithErrorAlert() {
        cy.get(this.selectorsList().loginFail).contains('not valid')
    }
    loginWithRequiredAlert() {
        cy.get(this.selectorsList().loginFail).contains('required')
    }
    loginUnsuccessful() {
        cy.get(this.selectorsList().usernamePlaceholder).clear()
        cy.get(this.selectorsList().passwordPlaceholder).clear()
    }
    loginSucessfulPage() {
        cy.get(this.selectorsList().headerWithLogout).contains('Logout')
    }
}

export default loginPage