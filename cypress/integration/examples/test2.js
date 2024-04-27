describe('test suit', function () {
    it('automate inputs and loop iteration using each', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        //dynamically select the name of the product by .each() method [LOOP Iterator]
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const prodName = $el.find('.product-name').text()
            if (prodName.includes('Cashews')) {
                //to compromise the promise wrap() is used
                cy.wrap($el).find('button').click()
                /* another way 
                cy.wrap($el).contains('ADD TO CART').click()
                */
            }
        })
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })
})