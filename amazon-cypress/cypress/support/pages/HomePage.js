export class HomePage {
  buscarProduto(produto) {
    cy.get('#twotabsearchtextbox').type(produto);
    cy.get('#nav-search-submit-button').click();
  }
}
