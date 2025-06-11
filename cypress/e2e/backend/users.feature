Feature: Consultar lista de usuários cadastrados

  @backend @rest @regress
  Scenario: API deve retornar a lista de usuários com sucesso
    Given que existem usuários cadastrados no sistema
    When eu envio uma requisição GET para obter a lista de usuários
    Then a resposta deve ter o status 200
    Then a resposta deve conter uma lista de usuários

  @backend @rest @regress
  Scenario: API deve retornar os dados do usuário com sucesso
    Given que existe um usuário cadastrado com um ID específico
    When eu envio uma requisição GET para obter os dados do usuário
    Then a resposta deve ter o status 200
    Then o corpo da resposta deve conter os dados do usuário