declare global {
    namespace Cypress {
      interface Chainable {
        dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      }
    }
  }
  

/// <reference types="cypress" />

// Example: Add a custom command to login (as an example)
Cypress.Commands.add('dataCy', (value: string) => {
    return cy.get(`[data-cy=${value}]`);
  });

  export {};

  
  // Now you can do: cy.dataCy('submit-button')
  