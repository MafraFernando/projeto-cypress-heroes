class homePage {
    selectorsList() {
        const selectors = {
            homePage: '.max-w-5xl',
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
            editPowers: "[data-cy='powersSelect']",
            editAvatar: "[accept='image/*']",
            submitButton: '.px-8 .bg-blue-700',
            genericTrashButton: "[data-cy='trash']",
            okDeletButton: '.gap-2 > .text-white',
            logoButton: "[alt='Cypress Heroes Logo']",
            logoutButton: 'nav > .flex > :nth-child(2) > .undefined'
            
        }  
            return selectors
     }
    homeButton() {
        cy.get(this.selectorsList().logoButton).click()
        cy.location('pathname').should('equal', '/heroes')
}
    logoutButton() {
    cy.get(this.selectorsList().logoutButton).click()
    cy.location('pathname').should('equal', '/heroes')
    cy.get(this.selectorsList().genericButton).contains('Login')
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
    editHero(superPoder) {
        cy.get(this.selectorsList().genericEditButton).eq(2).click()
        cy.get(this.selectorsList().editName).clear().type('Test Hunter')
        cy.get(this.selectorsList().editPrice).clear().type('50')
        cy.get(this.selectorsList().editFans).clear().type('10')
        cy.get(this.selectorsList().editSaves).clear().type('10')
        cy.get(this.selectorsList().editPowers).select(superPoder)
        cy.get(this.selectorsList().editAvatar).selectFile('C:/Users/mafra/Desktop/Programação/projeto-cypress-heroes/cypress-heroes/cypress/fixtures/robot-icon.png')
        cy.get(this.selectorsList().submitButton).click()
      
    }
    confirmationHero() {
        cy.get(this.selectorsList().homePage).contains('Test Hunter')
    }

    deletHero() {
        cy.get(this.selectorsList().genericTrashButton).eq(3).click()
        cy.get(this.selectorsList().okDeletButton).click()
    }
}

export default homePage