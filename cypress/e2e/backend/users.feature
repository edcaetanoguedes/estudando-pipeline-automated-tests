Feature: Consultar lista de usuários cadastrados

  @backend @rest @regres
  Scenario: API deve retornar a lista de usuários com sucesso
    Given que existem usuários cadastrados no sistema
    When eu envio uma requisição GET para obter a lista de usuários
    Then a resposta deve ter o status 200
    And a resposta deve conter uma lista de usuários
