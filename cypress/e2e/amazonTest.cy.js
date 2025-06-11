import { HomePage } from '../support/pages/HomePage';
import { ResultadoBuscaPage } from '../support/pages/ResultadoBuscaPage';
import { ProdutoPage } from '../support/pages/ProdutoPage';
import { CarrinhoPage } from '../support/pages/CarrinhoPage';

const home = new HomePage();
const resultado = new ResultadoBuscaPage();
const produto = new ProdutoPage();
const carrinho = new CarrinhoPage();

describe('Fluxo de compra na Amazon', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Buscar, adicionar ao carrinho e validar', () => {
    cy.fixture('produto').then((data) => {
      home.buscarProduto(data.nome);
      resultado.selecionarPrimeiroProduto();
      produto.adicionarAoCarrinho();
      carrinho.validarProdutoNoCarrinho();
    });
  });
});
