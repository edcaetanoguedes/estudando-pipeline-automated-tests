const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

// Scenario: API deve responder com status 200 no endpoint de health check

Given("que a aplicação está em execução", () => {
  //
});

When("eu envio uma requisição GET para raiz", function () {
  cy.request({
    method: "GET",
    url: `/`,
    failOnStatusCode: false,
  }).as("response");
});

Then("a resposta deve ter o status 200", () => {
  cy.get("@response").then((response) => {
    expect(response.status).to.eq(200);
  });
});
