// O sistema faz login
Cypress.Commands.add('login', (login, password) => {
    cy.visit('https://ourolote.com.br/accounts/login/?next=/');
    cy.get('#id_username').type(login);
    cy.get('#id_password').type(password);
    cy.get('[type="submit"]').click();
    cy.url().should('include', 'https://ourolote.com.br/');
    cy.get('.alert-success').should('not.exist');
  })
  
  // O sistema faz a mudança de senha da antiga para uma nova
  Cypress.Commands.add('changePassword', (oldPassword, newPassword) => {
    cy.visit('https://ourolote.com.br/');
    //alterar a senha
    cy.get('.text-gray-600').click();
    cy.get('[href="/alterar-senha/"]').click();
    cy.get('#id_old_password').type(oldPassword);
    cy.get('[name="new_password1"]').type(newPassword);
    cy.get('[name="new_password2"]').type(newPassword);
    cy.get('[type="submit"]').click();
    cy.get('.alert-success').should('be.visible').and('contain', 'Senha alterada com sucesso!');
      

  })
  // O sistema fa logout
  Cypress.Commands.add('logout', () => {
    
    cy.get('.text-gray-600').click();
    cy.get('[href="/accounts/logout/"]').click();
    cy.get('.alert-success').should('not.exist');
    cy.url().should('include', 'https://ourolote.com.br/accounts/login/');


  })
  
  // O sistema faz a mudança de senha da nova para a antiga
  Cypress.Commands.add('changePassword2', (newPassword, oldPassword) => {

    cy.get('.text-gray-600').click();
    cy.get('[href="/alterar-senha/"]').click();
    cy.get('#id_old_password').type(newPassword);
    cy.get('[name="new_password1"]').type(oldPassword);
    cy.get('[name="new_password2"]').type(oldPassword);
    cy.get('[type="submit"]').click();
    cy.get('.alert-success').should('be.visible').and('contain', 'Senha alterada com sucesso!');
  
  })

  
  // O sistema faz o cadastro de um cliente
  Cypress.Commands.add('registerCustomer', (nome, cpf, telefone) => {
    cy.visit('https://ourolote.com.br/clientes/');
    cy.get('[href="/clientes/"]').click();
    cy.get('[href="/cliente/create/"]').click();
    cy.get('[name="nome"]').type(nome);
    cy.get('[name="cpf"]').type(cpf);
    cy.get('[name="telefone"]').type(telefone);
    //cy.get('[type="submit"]').click();
  })


    // O sistema faz a venda de um produto
    Cypress.Commands.add('sellProduct', (formattedDate) => {
    cy.visit('https://ourolote.com.br/');
    cy.get('[href="/loteamento/8/"]').click();
    cy.get('[href="#collapse-1"]').click();
    cy.get('[href="/lote/359/"]').click();
    cy.get('[href="/venda/create/359/"]').click();
    cy.get('#select2-cliente-container').click()
    cy.get('select#cliente').select('sandro santos', {force: true});
    cy.get('#id_data').type(formattedDate);
    cy.get('form > .btn > .text-white').click();

  })
  // O sistema faz um parcelamento da venda
  Cypress.Commands.add('payinInstallments', (valorEntrada, qtdParcelasEntrada, formattedDate, qtdParcelasRestante, formattedDate2) => {
    cy.visit('https://ourolote.com.br/lote/359/');
    cy.get('.text-white-50').click();
    cy.get('[name="valor_entrada"]').type(valorEntrada);
    cy.get('[name="qtd_parcelas_entrada"]').type(qtdParcelasEntrada);
    cy.get('[name="data_primeiro_pagamento_entrada"]').type(formattedDate);
    cy.get('[name="qtd_parcelas_restantes"]').type(qtdParcelasRestante)
    cy.get('[name="data_primeira_parcela_restante"]').type(formattedDate2);
    cy.get('form > .btn > .text-white').click();

    cy.wait(20000);
    
  })
  // O sistema exclui a venda
  Cypress.Commands.add('deleteSale', (oldPassword) => {
    cy.get('.card-body > .btn > .text-white').click();
    cy.get('.form-control').type(oldPassword);
    cy.get('[type="submit"]').click();
  })