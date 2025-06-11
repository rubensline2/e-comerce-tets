export class HomePage {
  buscarProduto(produto) {
    cy.get('#nav-bb-search').type(produto);
    cy.get('.nav-bb-button').click();
  }
}
