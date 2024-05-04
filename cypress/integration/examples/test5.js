describe('test suite', () => {
    it('child tab navigate', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        //origin to navigate to child window
        cy.origin('https://www.qaclickacademy.com/', () => {
            //click dynamically with dom in page
            cy.contains('About us').click()
            //CONTAIN for validating text present in dom element
            cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy ')
            cy.contains('Blog').click()

        })
    })

    it('child window navigate', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //as prop is JQ method promise is resolved by then()
        cy.get('#opentab').then(function (el) {
            //to pick the value of an attribute JQ 'PROP()' method is used
            const urlValue = el.prop('href')
            cy.visit(urlValue)
            cy.origin(urlValue, () => {
                cy.contains('About us').click()
                cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy ')
            })
        })
    })
})