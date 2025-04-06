describe('Task Manager', () => {
    it('should add and remove a task', () => {
      cy.visit('http://localhost:5173');
  
      cy.get('input[placeholder="Enter a task"]').type('Write Cypress test');
      cy.get('button').contains('Add').click();
  
      cy.contains('Write Cypress test').should('exist');
  
      cy.contains('Write Cypress test')
        .parent()
        .find('button')
        .click();
  
      cy.contains('Write Cypress test').should('not.exist');
    });
  });
  