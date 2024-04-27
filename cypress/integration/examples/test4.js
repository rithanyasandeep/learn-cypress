describe("Test suite", () => {
    it("handle pop-up and event handling", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#name').type('xxx')
        cy.get('#alertbtn').click()
        //handle window alert
        cy.on('window:alert', (string) => {
            //chai assertion
            expect(string).to.equal('Hello xxx, share this practice page and share your knowledge')
        })
        cy.get('#name').type('yyy')
        cy.get('#confirmbtn').click()
        //handle window confirm
        cy.on('window:confirm', (str) => {
            //chai assertion
            expect(str).to.equal('Hello yyy, Are you sure you want to confirm?')
        })



    })
}) 
