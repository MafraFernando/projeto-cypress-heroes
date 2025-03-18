class createPage {
    selectorsList() {
        const selectors = {
            createNewHeroButton: "[href='/heroes/new']",
            newName: "[data-cy='nameInput']",
            newPrice: "[data-cy='priceInput']",
            newFans: "[data-cy='fansInput']",
            newSaves: "[data-cy='savesInput']",
            newPowerSelect: "[data-cy='powersSelect']",
            submitButton: '.bg-blue-700', /* eq[1] */
            homeHeroes: '.max-w-5xl',
            backGroundCreateHero: "[novalidate='']"


        }  
            return selectors
     }
createNewHero(superPower) {
        cy.get(this.selectorsList().createNewHeroButton).click()
        cy.get(this.selectorsList().newName).type('Super QA')
        cy.get(this.selectorsList().newPrice).type('80')
        cy.get(this.selectorsList().newFans).type('10')
        cy.get(this.selectorsList().newSaves).type('10')
        cy.get(this.selectorsList().newPowerSelect).select(superPower)
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get(this.selectorsList().homeHeroes).contains('Super QA')
}

createNewHeroWithoutName(superPower) {
    cy.get(this.selectorsList().createNewHeroButton).click()
    cy.get(this.selectorsList().newPrice).type('80')
    cy.get(this.selectorsList().newFans).type('10')
    cy.get(this.selectorsList().newSaves).type('10')
    cy.get(this.selectorsList().newPowerSelect).select(superPower)
    cy.get(this.selectorsList().submitButton).eq(1).click()
    cy.get(this.selectorsList().backGroundCreateHero).contains('required')
}

createNewHeroWithoutPrice(superPower) {
    cy.get(this.selectorsList().createNewHeroButton).click()
    cy.get(this.selectorsList().newName).type('Super QA')
    cy.get(this.selectorsList().newFans).type('10')
    cy.get(this.selectorsList().newSaves).type('10')
    cy.get(this.selectorsList().newPowerSelect).select(superPower)
    cy.get(this.selectorsList().submitButton).eq(1).click()
    cy.get(this.selectorsList().backGroundCreateHero).contains('required')
}

createNewHeroWithoutFans(superPower) {
    cy.get(this.selectorsList().createNewHeroButton).click()
    cy.get(this.selectorsList().newName).type('Super QA')
    cy.get(this.selectorsList().newPrice).type('80')
    cy.get(this.selectorsList().newSaves).type('10')
    cy.get(this.selectorsList().newPowerSelect).select(superPower)
    cy.get(this.selectorsList().submitButton).eq(1).click()
    cy.get(this.selectorsList().backGroundCreateHero).contains('required')
    
}

createNewHeroWithoutSaves(superPower) {
    cy.get(this.selectorsList().createNewHeroButton).click()
    cy.get(this.selectorsList().newName).type('Super QA')
    cy.get(this.selectorsList().newPrice).type('80')
    cy.get(this.selectorsList().newFans).type('10')
    cy.get(this.selectorsList().newPowerSelect).select(superPower)
    cy.get(this.selectorsList().submitButton).eq(1).click()
    cy.get(this.selectorsList().backGroundCreateHero).contains('required')
}

createNewHeroWithoutPower() {
    cy.get(this.selectorsList().createNewHeroButton).click()
    cy.get(this.selectorsList().newName).type('Super QA')
    cy.get(this.selectorsList().newPrice).type('80')
    cy.get(this.selectorsList().newFans).type('10')
    cy.get(this.selectorsList().newSaves).type('10')
    cy.get(this.selectorsList().submitButton).eq(1).click()
    cy.get(this.selectorsList().backGroundCreateHero).contains('required')
}
}

export default createPage