describe('framework', () => {
    before(function () {
        cy.fixture('example.json').then(function (data) {
            this.data = data
        })
    }
    )

    it('Exercise Framwork1', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.url().should('include', 'angularpractice')
        cy.get('.form-group input[name="name"]').type(this.data.name)
        cy.get('select').select(this.data.gender)
    })
})