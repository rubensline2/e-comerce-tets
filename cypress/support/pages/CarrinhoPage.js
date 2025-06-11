export class CarrinhoPage {
  validarProdutoNoCarrinho() {
    cy.get('#nav-cart-count').click()
    cy.get('#sc-active-items-header').should('exist');
  }
}
