Feature: Verificar se a API está ativa

    @backend @rest @regress
  Scenario: API deve responder com status 200 no endpoint de health check
    Given que a aplicação está em execução
    When eu envio uma requisição GET para raiz
    Then a resposta deve ter o status 200
