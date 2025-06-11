Cypress.Commands.add('recusarSeguroSeNecessario', () => {
  cy.get('body').then(($body) => {
    if ($body.find('#attach-warranty-display > #attach-warranty-header').length > 0) {
      cy.get('#attachSiNoCoverage').click();
    }
  });
});
Cypress.Commands.add('fecharModalAmazon', () => {
  cy.get('body').then(($body) => {
    if ($body.find('#attach-close_sideSheet-link').length > 0) {
      cy.get('#attach-close_sideSheet-link').click();
    }
  });
});
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
