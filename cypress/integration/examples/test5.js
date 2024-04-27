describe('test suite', () => {
    it('child window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        //origin to navigate to child window
        cy.origin('https://www.qaclickacademy.com/', () => {
            //click dynamically with dom in page
            cy.contains('About us').click()
            //CONTAIN for validating the text in el
            cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy ')
            cy.contains('Blog').click()

        })
    })
})