export class HomePage {
  buscarProduto(produto) {
    cy.get('#twotabsearchtextbox').type(produto).type('{enter}');
  }
}
