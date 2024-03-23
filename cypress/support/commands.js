Cypress.Commands.add('login', (login, password) => {
    cy.visit('https://ourolote.com.br/accounts/login/?next=/');
    cy.get('#id_username').type(login);
    cy.get('#id_password').type(password);
    cy.get('[type="submit"]').click();
    cy.url().should('include', 'https://ourolote.com.br/');
    cy.get('.alert-success').should('not.exist');
  })
  
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
  
  Cypress.Commands.add('logout', () => {
    //fazer logout
    cy.get('.text-gray-600').click();
    cy.get('[href="/accounts/logout/"]').click();
    cy.get('.alert-success').should('not.exist');
    cy.url().should('include', 'https://ourolote.com.br/accounts/login/');


  })

  Cypress.Commands.add('changePassword2', (newPassword, oldPassword) => {

    cy.get('.text-gray-600').click();
    cy.get('[href="/alterar-senha/"]').click();
    cy.get('#id_old_password').type(newPassword);
    cy.get('[name="new_password1"]').type(oldPassword);
    cy.get('[name="new_password2"]').type(oldPassword);
    cy.get('[type="submit"]').click();
    cy.get('.alert-success').should('be.visible').and('contain', 'Senha alterada com sucesso!');
  
  })

  const { faker } = require('@faker-js/faker');
  

  Cypress.Commands.add('registerCustomer', () => {
    cy.visit('https://ourolote.com.br/clientes/');
    cy.get('[href="/clientes/"]').click();
    cy.get('[href="/cliente/create/"]').click();
    cy.get('[name="nome"]').type(faker.person.fullName());
    cy.get('[name="cpf"]').type(faker.seed());
    cy.get('[name="telefone"]').type(faker.phone.imei());
    //cy.get('[type="submit"]').click();
  })