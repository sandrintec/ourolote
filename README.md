# Projeto Cypress

Este repositório contém testes automatizados usando o framework Cypress para os seguintes cenários:

- Login
- Mudança de senha
- Logout



## Cenários de Teste

Aqui estão os cenários de teste para cada funcionalidade:

### Login

- **Cenário 1:** Login bem-sucedido
- **Cenário 2:** Login com senha incorreta (ausência de mensagem de erro)

### Mudança de Senha

- **Cenário 1:** Mudança de senha com sucesso

### Logout

- **Cenário 1:** Logout bem-sucedido

### Cadastro bem-sucedido de um novo cliente

Passos:
- O teste roda por três vezes.
- Para cada rodada, um cadastro aleatório de cliente é realizado com informações únicas.
- Os campos obrigatórios são preenchidos corretamente.
- Após o cadastro, os detalhes do cliente são verificados para garantir que foram corretamente salvos no sistema.
- O sistema confirma o sucesso do cadastro exibindo uma mensagem ou redirecionando para a página de perfil do cliente.

Este cenário de teste verifica se o sistema é capaz de lidar com múltiplos cadastros de clientes de forma adequada, garantindo que as informações fornecidas sejam corretamente armazenadas e que o processo de cadastro seja concluído com sucesso.

## Sugestões de Melhorias

- Implementar uma mensagem de erro para login com senha incorreta.
- Adicionar mais casos de teste para diferentes cenários de mudança de senha.
- Melhorar a estrutura dos testes para torná-los mais modulares e reutilizáveis.

### Sugestões de Melhorias para o Cenário de Cadastro de Clientes

- Parâmetros de Entrada Aleatórios: Em vez de apenas preencher informações aleatórias para o cliente, podemos estabelecer critérios mais específicos para garantir a integridade dos dados. Por exemplo, podemos gerar nomes de clientes com base em um conjunto de nomes comuns e sobrenomes, e-mails válidos, números de telefone formatados corretamente, etc. Isso ajuda a simular dados mais realistas e úteis para testes.
- Teste de Sobrecarga do Sistema: Podemos expandir o teste para incluir casos onde o sistema é submetido a uma carga mais pesada, realizando múltiplos cadastros em rápida sucessão. Isso ajuda a verificar se o sistema é capaz de lidar com uma grande quantidade de solicitações de cadastro de forma eficiente e sem perda de dados.
- Teste de Desempenho: Além da funcionalidade básica, podemos realizar testes de desempenho para avaliar o tempo de resposta do sistema durante o processo de cadastro, garantindo uma experiência fluida para o usuário, mesmo sob carga pesada.

Ao implementar essas melhorias, o cenário de teste de cadastro de clientes se tornará mais completo e abrangente, ajudando a garantir a qualidade e robustez do sistema em diferentes condições de uso.
