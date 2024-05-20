describe('test suite', () => {
    it('calanders', () => {
        const year = "1998"
        const month = '5'
        const date = '1'
        const list = [month, date, year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        //to pick the placeholder of input
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__prev-button').click()
        cy.get('.react-calendar__navigation__prev-button').click()
        cy.get('.react-calendar__navigation__prev-button').click()
        //contain take (parameter, value of parameter)
        cy.contains('.react-calendar__decade-view__years__year', year).click()
        //to click the month using eq method ,as it takes index and it strts from 0 we used -1 to go for previous
        cy.get('.react-calendar__tile abbr').eq(Number(month) - 1).click()
        cy.contains('abbr', date).click()
        //Assertion
        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {

            cy.wrap($el).invoke('val').should('eq', list[index])
        })
    })
})