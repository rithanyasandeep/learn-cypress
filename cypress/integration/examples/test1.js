/// <reference types="Cypress" />

describe("test suit", function () {

    it("1st test case", function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.url().should('includes', 'seleniumPractise')
        /*     another way
        =>the correct assertion command to check for partial inclusion in Cypress is include, not contains
    
        cy.url().should('contains','seleniumPractise')
        // to verify the entire url is exactly correct
        cy.url().should('eq', 'https://rahulshettyacademy.com/seleniumPractise/#/')
        */
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        //take invisible element
        cy.get('.product').should('have.length', 5)
        //to pick only the visible element using JQ method
        cy.get('.product:visible').should('have.length', 4)
        //using alias method to replce repetition
        cy.get('.products').as('productMainLocator')
        //PARENT CHILD Chaining-restrain the search to specific block by .find()
        cy.get('@productMainLocator').find('.product').should('have.length', 4)
        //select products by the index EQ() method is used 
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        //dynamically select the name of the product by .each() method [LOOP Iterator]
        cy.get('@productMainLocator').find('.product').each(($el, index, $list) => {
            const prodName = $el.find('.product-name').text()
            if (prodName.includes('Cashews')) {
                //to compromise the promise wrap() is used
                cy.wrap($el).find('button').click()
                /* another way 
                cy.wrap($el).contains('ADD TO CART').click()
                */
            }

        })
        /* TYPE-1
        cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
     
    })*/
        //TYPE-2
        const nameLogo = (a) => {
            cy.log(a.text())
        }
        cy.get('.brand').then(nameLogo)
        //assert the text
        cy.get('.brand').should('have.text', 'GREENKART')

        /* TYPE-3
        cy.get('.brand').then((a)=>
        {
            cy.log(a.text())
        })*/
    })
})
