import { faker } from '@faker-js/faker';

describe('mudança de senha', () => {
    
    const login = Cypress.env("username");
    const oldPassword = Cypress.env("password");
    const newPassword = Cypress.env("newPassword");
    const nome = faker.person.fullName();
    const cpf = faker.seed();
    const telefone = faker.phone.imei();
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
    const month2 = String(today.getMonth() + 2).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const formattedDate2 = `${year}-${month2}-${day}`;
    const valorEntrada = faker.datatype.number({ min: 1000, max: 5000 });
    const qtdParcelasEntrada = faker.number.binary({ min: 1 });
    const qtdParcelasRestante = faker.number.octal();

 
  
    it('mudar a senha com sucesso', () => {
        cy.login(login, oldPassword);
        cy.changePassword(oldPassword, newPassword);

        cy.logout();
        cy.login(login, newPassword);
        cy.changePassword2(newPassword, oldPassword);
        cy.logout();

      
    })

    it.only('O sistema deve ser capaz de cadastrar um cliente', () => {
        cy.login(login, oldPassword);
        cy.registerCustomer(nome, cpf, telefone);
        
    })

    it('O sistema deve ser capaz de fazer uma venda', () => {
        cy.login(login, oldPassword);
        cy.sellProduct(formattedDate);
    })

    it('O cliente deve ser capaz de parcelar a compra', () => {
        cy.login(login, oldPassword);
        cy.payinInstallments(valorEntrada, qtdParcelasEntrada, formattedDate, qtdParcelasRestante, formattedDate2);

        cy.deleteSale(oldPassword);
    })


  })

  
  