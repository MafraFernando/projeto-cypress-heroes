class homePage {
    selectorsList() {
        const selectors = {
            genericButton: 'button',
            usernamePlaceholder: "[data-cy='email']",
            passwordPlaceholder: "[data-cy='password']",
            headerWithLogout: '.max-w-6xl',
            genericLikeButton: "[data-cy='like']",
            genericBuyButton: "[data-cy='money']",
            windowAlert: '.gap-4',
            okButton: '.gap-4 button',
            confirmBuyButton: '.gap-4 button', /* Yes = 0, No = 1 */
            genericEditButton: "[data-cy='pencil']",
            editName: "[data-cy='nameInput']",
            editPrice: "[data-cy='priceInput']",
            editFans: "[data-cy='fansInput']",
            editSaves: "[data-cy='savesInput']",
            editPowers: "[name='powers']",
            editAvatar: "[data-cy='avatarFile']",
            submitButton: '.px-8 .bg-blue-700'
            
        }  
            return selectors
     }

    accessLoginPage() {
        cy.visit('http://localhost:3000/')
    }

    loginButton() {
        cy.get(this.selectorsList().genericButton).contains('Login').click()
    }
    loginAnyWithUser(username, password) {
        cy.get(this.selectorsList().usernamePlaceholder).type(username)
        cy.get(this.selectorsList().passwordPlaceholder).type(password)
        cy.get(this.selectorsList().genericButton).contains('Sign in').click()
    }

    loginSucessfulPage() {
        cy.get(this.selectorsList().headerWithLogout).contains('Logout')
    }

    homeWithoutLogin() {
        cy.get(this.selectorsList().genericLikeButton).eq(0).click()
        cy.get(this.selectorsList().windowAlert).contains('You must log in to').click()
        cy.get(this.selectorsList().okButton).click()
        cy.get(this.selectorsList().genericBuyButton).eq(0).click()
        cy.get(this.selectorsList().windowAlert).contains('You must log in to').click()
        cy.get(this.selectorsList().okButton).click()
    }

    likeHero() {
        cy.get(this.selectorsList().genericLikeButton).eq(1).click()
    }
    buyHero() {
        cy.get(this.selectorsList().genericBuyButton).eq(0).click()
        cy.get(this.selectorsList().confirmBuyButton).eq(0).click()
    }
    editHero() {
        cy.get(this.selectorsList().genericEditButton).eq(2).click()
        cy.get(this.selectorsList().editName).clear().type('Test Hunter')
        cy.get(this.selectorsList().editPrice).clear().type('50')
        cy.get(this.selectorsList().editFans).clear().type('10')
        cy.get(this.selectorsList().editSaves).clear().type('10')
        cy.get(this.selectorsList().editPowers)
        // cy.get(this.selectorsList().submitButton).click()
    }
}

export default homePage