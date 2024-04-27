describe("test suit", function () {

    it("validate checkbox, radio button, visible and invisible ", function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('includes', 'AutomationPractice')

        //checkboxes 
        //to choose checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        //to unselect the checkboxes
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //radiobutton
        cy.get('[value="radio2"]').check().should('be.checked')

        //static dropdown
        cy.get('select').select('option3').should('have.value', 'option3')

        //dynamic dropdown
        cy.get('#autocomplete').type('rit')
        cy.get('li .ui-menu-item-wrapper').each(($el, index, $list) => {
            if ($el.text() == 'Mauritania') {
                cy.wrap($el).click()
            }
        })

        //handle visible and invisible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')




    })
})
