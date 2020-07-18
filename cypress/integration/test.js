describe('test for form', () => {

    it('initial form tests',() => {

        cy.visit('/pizza');

        cy.get('[data-cy="submit"]')
        .should('have.disabled', 'disabled');


        cy.get('[for="Name"] > input')
        .type('Alex Whitt')
        .should('have.value', 'Alex Whitt');


        cy.get('[data-cy="submit"')
        .should('have.enabled', 'enabled');
    })
})