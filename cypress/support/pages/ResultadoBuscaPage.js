export class ResultadoBuscaPage {
  selecionarPrimeiroProduto() {
    cy.get('.s-image')
    .first()
    .click()  
  }
}
