describe('Get a forecast for a city', () => {
    it('Visits the weather chart site', () => {
        cy.visit('http://localhost:8080')
    })

    it('Finds the search bar', () => {
        cy.get('input').should('be.visible')
    })

    it('Displays a weather chart when user searches for a city', () => {
        cy.get('input').type('Denver')
        cy.contains('Submit').click()
        cy.get('table tbody tr:first').should('have.attr', 'data-reactid', '.0.1.1.$Denver')
    })

    it('Displays a second weather chart above the first when user searches for a another city', () => {
        cy.get('input').type('Boulder')
        cy.contains('Submit').click()
        cy.get('table tbody tr:first').should('have.attr', 'data-reactid', '.0.1.1.$Boulder')
    })
})