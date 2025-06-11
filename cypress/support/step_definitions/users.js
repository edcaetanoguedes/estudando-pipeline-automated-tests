const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

//Scenario: API deve retornar a lista de usuários com sucesso

Given("que existem usuários cadastrados no sistema", () => {
  //
});

When("eu envio uma requisição GET para obter a lista de usuários", () => {
  cy.api_request("GET", "/users");
});

// Then('a resposta deve ter o status 200', () => {})

Then("a resposta deve conter uma lista de usuários", () => {
  cy.get("@response").then((response) => {
    expect(response.body).to.be.an("array");
  });
});

// Scenario: API deve retornar os dados do usuário com sucesso

Given("que existe um usuário cadastrado com um ID específico", () => {
  //
});

When("eu envio uma requisição GET para obter os dados do usuário", () => {
  cy.api_request("GET", "/users/1");
});

// Then ('a resposta deve ter o status 200', () => {})

Then("o corpo da resposta deve conter os dados do usuário", () => {
  cy.get("@response").then((response) => {
    expect(response.body).to.have.property("id");
    expect(response.body).to.have.property("name");
    expect(response.body).to.have.property("username");
    expect(response.body).to.have.property("phone");
  });
});
