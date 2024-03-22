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

Este teste automatizado visa verificar o sucesso do processo de cadastro de um novo cliente em sua aplicação. O teste segue os seguintes passos:
- Login no Sistema: O teste realiza o login no sistema utilizando credenciais válidas.
- Acesso à Página de Cadastro: Após o login, ele navega para a página de cadastro de clientes.
- Cadastro de Cliente Aleatório: Utilizando o Faker.js, o teste preenche os campos obrigatórios do formulário de cadastro com informações aleatórias, como nome, CPF e telefone, a cada execução.

## Sugestões de Melhorias para o cenário de Login e Logout

- Implementar uma mensagem de erro para login com senha incorreta.
- Adicionar mais casos de teste para diferentes cenários de mudança de senha.
- Melhorar a estrutura dos testes para torná-los mais modulares e reutilizáveis.

### Sugestões de Melhorias para o Cenário de Cadastro de Clientes

- Parâmetros de Entrada Aleatórios: Em vez de apenas preencher informações aleatórias para o cliente, podemos estabelecer critérios mais específicos para garantir a integridade dos dados. Por exemplo, podemos gerar nomes de clientes com base em um conjunto de nomes comuns e sobrenomes, e-mails válidos, números de telefone formatados corretamente, etc. Isso ajuda a simular dados mais realistas e úteis para testes.
- Teste de Sobrecarga do Sistema: Podemos expandir o teste para incluir casos onde o sistema é submetido a uma carga mais pesada, realizando múltiplos cadastros em rápida sucessão. Isso ajuda a verificar se o sistema é capaz de lidar com uma grande quantidade de solicitações de cadastro de forma eficiente e sem perda de dados.
- Teste de Desempenho: Além da funcionalidade básica, podemos realizar testes de desempenho para avaliar o tempo de resposta do sistema durante o processo de cadastro, garantindo uma experiência fluida para o usuário, mesmo sob carga pesada.

Ao implementar essas melhorias, o cenário de teste de cadastro de clientes se tornará mais completo e abrangente, ajudando a garantir a qualidade e robustez do sistema em diferentes condições de uso.
