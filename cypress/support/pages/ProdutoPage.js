export class ProdutoPage {
  adicionarAoCarrinho() {
    cy.get('#add-to-cart-button').should('be.visible').click();
    cy.recusarSeguroSeNecessario()
    cy.fecharModalAmazon()
  }
}
