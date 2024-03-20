//import { faker } from '@faker-js/faker'
describe('mudança de senha', () => {
    const login = Cypress.env("username");
    const oldPassword = Cypress.env("password");
    const newPassword = Cypress.env("newPassword");
    const registerCustomer = ('');

    
  
    it('mudar a senha com sucesso', () => {
        cy.login(login, oldPassword);
        cy.changePassword(oldPassword, newPassword);
        cy.logout();
        cy.login(login, newPassword);
        cy.changePassword2(newPassword, oldPassword);
        cy.logout();
        //cy.login(login, oldPassword);

      
    })

    it.only('O sistema deve ser capaz de cadastrar um cliente', () => {
        cy.login(login, oldPassword);
        cy.registerCustomer();

    
        
    })

  })

  
  