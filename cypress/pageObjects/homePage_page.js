export default class HomePage {

    checkCookiesPageIsVisible() {
        cy.get("#cookies").should("be.visible")
    }
    
    checkCookiesPageIsNotVisible() {
        cy.get("#cookies").should("not.be.visible")
    }
}

