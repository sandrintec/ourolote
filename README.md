# Projeto Cypress

Este repositório contém testes automatizados usando o framework Cypress para os seguintes cenários:

- Login
- Mudança de senha
- Logout
- Cadastro bem-sucedido de um novo cliente
- Venda de um lote
- Parcelamento de uma venda



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
- Cadastro de Cliente Aleatório: Utilizando o Faker.js, o teste preenche os campos obrigatórios do formulário de cadastro com informações aleatórias, como nome, CPF e telefone.

### Venda de um lote e Parcelamento da venda

nesses dois testes (venda e parcelamento) eu defini funções para a data atual dia mês e ano, no caso elas usam strings que armazenam informações pasta garantir que os números tenham dois dígitos, quando for menor que dez vai digitar sempre um zero a esquerda. Ten-se +1 em formattedDate e +2 em formattedDate2, pois month(meses) em javascript começa com 0. Sendo assim faz a venda sempre na data atual e usa sempre o mês seguinte para a próxima parcela caso a venda seja parcelada. 
No teste o sistema faz a venda de um lote para Sandro Santos no valor de 20000.00, faz o parcelamento definindo um valor de entrada em uma parcela e depois define uma quantidade de parcelas para o valor restante. Uso o faker para definir um valor de entrada entre mil e cinco mil, Também para definir um valor entre zero e oito para números de parcelas restantes. 
Após preencher o formulário e fazer o parcelamento o sistema execulta o próximo comando que é excluir a venda, para excluir  pede-se a senha que se usa para fazer login no sistema. 
O sistema contem algumas falhas que requerem melhorias. percebi que nao há uma opção de excluir um cliente cadastrado no sistema caso seja nescessário. também na página de clientes cadastrados existem algumas manutenções a fazer no sistema. por exemplo: na opção de editar os dados do cliente está ok, também contem uma opção de acessar a compra do lote que está ok. Mas além de nao ter uma opção de editar clientes, existe uma opção de ACESSO formada por um ícone de uma chave que nao faz sentido algum. ao clicar na chave ele me leva para outra pagina que pede para gerenciar usuário apenas com a opção de mudar o nome, tem uma opção salvar e outra resetar senha, mas ao clicar nada acontece, apenas me leva novamente para página de clientes cadastrados.



## Sugestões de Melhorias para o cenário de Login e Logout

- Implementar uma mensagem de erro para login com senha incorreta.
- Adicionar mais casos de teste para diferentes cenários de mudança de senha.
- Melhorar a estrutura dos testes para torná-los mais modulares e reutilizáveis.

### Sugestões de Melhorias para o Cenário de Cadastro de Clientes

- Parâmetros de Entrada Aleatórios: Em vez de apenas preencher informações aleatórias para o cliente, podemos estabelecer critérios mais específicos para garantir a integridade dos dados. Por exemplo, podemos gerar nomes de clientes com base em um conjunto de nomes comuns e sobrenomes, e-mails válidos, números de telefone formatados corretamente, etc. Isso ajuda a simular dados mais realistas e úteis para testes.
- Teste de Sobrecarga do Sistema: Podemos expandir o teste para incluir casos onde o sistema é submetido a uma carga mais pesada, realizando múltiplos cadastros em rápida sucessão. Isso ajuda a verificar se o sistema é capaz de lidar com uma grande quantidade de solicitações de cadastro de forma eficiente e sem perda de dados.
- Teste de Desempenho: Além da funcionalidade básica, podemos realizar testes de desempenho para avaliar o tempo de resposta do sistema durante o processo de cadastro, garantindo uma experiência fluida para o usuário, mesmo sob carga pesada.

Ao implementar essas melhorias, o cenário de teste de cadastro de clientes se tornará mais completo e abrangente, ajudando a garantir a qualidade e robustez do sistema em diferentes condições de uso.

### Sugestões de melhorias para  cenário Venda de um lote e Parcelamento da venda

1. Aperfeiçoamento do Processo de Venda:

- Flexibilidade no Parcelamento: Implementar um mecanismo que permita definir a quantidade de parcelas desejadas pelo usuário, em vez de um valor aleatório dentro de um intervalo fixo. Isso proporcionaria maior controle ao usuário sobre o parcelamento da venda.

2. Aprimoramento da Exclusão de Vendas:

- Validação de Segurança: Além da solicitação da senha do usuário para excluir uma venda, considerar a implementação de uma camada adicional de autenticação, como a confirmação por e-mail ou SMS, para garantir maior segurança e prevenir exclusões acidentais.

3. Gerenciamento de Clientes:

- Opção de Excluir Clientes: Adicionar uma funcionalidade que permita aos usuários excluir clientes cadastrados, caso necessário. Isso pode ser útil para manter o banco de dados limpo e atualizado.

- Correção de Falhas na Página de Clientes Cadastrados:

  * Editar Clientes: Implementar a funcionalidade de edição de clientes, proporcionando aos usuários a capacidade de atualizar as informações dos clientes conforme necessário.
  * Aprimorar Funcionalidade de Acesso: Rever a funcionalidade representada pelo ícone de uma chave na página de clientes cadastrados. Se não for relevante, considerar removê-la ou substituí-la por uma funcionalidade mais útil para os usuários.
  * Corrigir Funcionalidade de Gerenciamento de Usuários: Certificar-se de que as opções disponíveis na página de gerenciamento de usuários estão funcionando corretamente. Se necessário, ajustar a lógica para garantir que as ações de salvar e resetar senha estejam operacionais.
