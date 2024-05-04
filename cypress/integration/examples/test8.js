/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('test suite', () => {
    it('iframes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a').contains('Job Support').click().should('contain', 'Job Support')

    })
})