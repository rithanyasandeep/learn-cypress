describe('test suit', () => {
    it('validate web tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const courseName = $e1.text()
            if (courseName.includes("Bugzilla + SQL + Agile")) {
                // to traverse to the immediate sibling next() and works only on cy.get()
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const coursePrice = price.text()
                    expect(coursePrice).to.equal('25')

                })
            }
        })
    })
})