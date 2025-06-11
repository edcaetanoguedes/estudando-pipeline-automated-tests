Feature: Consulta e gerenciamento de posts

  @backend @rest @regress
  Scenario: Efetuar cadastro de um Post com sucesso
    Given que um usuário existente quer cadastrar um Post via API
    When eu envio uma requisição POST para cadastrar o Post do usuário
    Then a resposta deve ter o status 201
    Then o corpo da resposta deve conter o ID do Post

  @backend @rest @regress
  Scenario: API deve retornar a lista de Posts
    Given que existem Posts cadastrados no sistema
    When eu envio uma requisição GET para obter a lista de Posts
    Then a resposta deve ter o status 200
    Then a resposta deve conter uma lista de Posts