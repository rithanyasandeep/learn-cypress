describe('test suite', () => {
    it('handle mousehover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //TYPE-1 to handle the invisible element-JQ method "show" is used  
        //SHOW- method should be applied on immediate parent on hidden elements  

        /*  
        cy.get('.mouse-hover-content').invoke('show')  
        */

        //TYPE-2 invisible ele is handled by adding click({force:true})
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')

    })
})