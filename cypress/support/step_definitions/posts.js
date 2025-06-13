const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

//  Scenario: Efetuar cadastro de um Post com sucesso

Given("que um usuário existente quer cadastrar um Post via API", () => {
  //
});

When("eu envio uma requisição POST para cadastrar o Post do usuário", () => {
  cy.api_request(
    "POST",
    "/posts",
    JSON.stringify({
      title: "[test] Título do Post",
      body: "[test] Corpo do Post",
      userId: 1,
    }),
  );
});

Then("a resposta deve ter o status 201", () => {
  cy.get("@response").then((response) => {
    expect(response.status).to.eq(201);
  });
});

Then("o corpo da resposta deve conter o ID do Post", () => {
  cy.get("@response").then((response) => {
    expect(response.body).to.have.property("id");
  });
});

// Scenario: API deve retornar os dados de um Post com sucesso

Given(
  "que eu quero consultar um Post específico cadastrado no sistema",
  () => {},
);

When("eu envio uma requisição GET para obter os detalhes do Post", () => {
  cy.api_request("GET", "/posts/1");
});

//Then ('a resposta deve ter o status 200', () => {})

// Then ('o corpo da resposta deve conter o ID do Post', () => {})

//   Scenario: API deve retornar a lista de Posts

Given("que existem Posts cadastrados no sistema", () => {});

When("eu envio uma requisição GET para obter a lista de Posts", () => {
  cy.api_request("GET", "/posts");
});

// Then ('a resposta deve ter o status 200', () => {})

Then("o corpo da resposta deve conter uma lista de Posts", () => {
  cy.get("@response").then((response) => {
    expect(response.body).to.have.an("array");
  });
});

// Scenario: Apagar um Post com sucesso

Given("que um Post existe", () => {});

When("eu envio uma requisição DELETE para apagar o Post", () => {
  cy.api_request("DELETE", "/posts/1");
});

// Then ('a resposta deve ter o status 200', () => {})

// Then ('o corpo da resposta deve conter o ID do Post', () => {})
