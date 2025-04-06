import './commands';

Cypress.on('uncaught:exception', (err) => {
  // prevent Cypress from failing the test on app errors
  console.error('Uncaught exception:', err);
  return false;
});
