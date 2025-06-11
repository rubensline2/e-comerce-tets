# 🛒 Testes Automatizados Amazon - Cypress

Este projeto contém testes automatizados com [Cypress](https://www.cypress.io/) para validar o fluxo de compra no site **[Amazon Brasil](https://www.amazon.com.br/)**.

---

## ✅ Fluxo testado

1. Buscar um produto (usando fixture com nome simulado)
2. Selecionar o primeiro produto da lista de resultados
3. Adicionar o produto ao carrinho
4. Validar que o produto foi adicionado ao carrinho

---

## 🧱 Estrutura do Projeto

```
amazon-cypress/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/                # Testes E2E
│   │   └── amazonTest.cy.js
│   ├── fixtures/           # Dados simulados
│   │   └── produto.json
│   └── support/
│       └── pages/          # Page Objects
├── cypress.config.js       # Configurações do Cypress
├── package.json            # Scripts e dependências
└── README.md               # Este arquivo
```

---

## ⚙️ Instalação

```bash
git clone https://github.com/seu-usuario/amazon-cypress.git
cd amazon-cypress
npm install
```

---

## 🚀 Execução dos Testes

### Abrir interface do Cypress

```bash
npm run open
```

### Rodar testes no modo headless

```bash
npm test
```

### Rodar testes com geração de relatório HTML

```bash
npm run test:report
```

---

## 📊 Relatório HTML

Será gerado em:

```
cypress/reports/mochawesome.html
```

---

## 🧪 Tecnologias Utilizadas

- Cypress
- Page Object Model (POM)
- Mochawesome Reporter
- Fixtures

---
## Gorest API Tests

Testes básicos para API Gorest usando token em arquivo Gorest environment.

## Listar usuários - GET
 - https://gorest.co.in/public/v2/users

## Criar usuário - POST
 - https://gorest.co.in/public/v2/users
 ```http
 json
{
  "name": "Rubens QA",
  "email": "rubens.qa+{{randomInt}}@email.com",
  "gender": "male",
  "status": "active"
}
 ```
## Atualizar usuário - PUT
 - https://gorest.co.in/public/v2/users/
```http
json
{
  "name": "Rubens QA Updated",
  "status": "inactive"
}
```
## Deletar usuário - DELETE
 - https://gorest.co.in/public/v2/users/{{user_id}}


## 👨‍💻 Autor

Rubens

---
#
