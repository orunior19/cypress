// ações de interação com a página

        //classe de ações
        // ação:: acessar login
        // ação:: preencher login
        // exportar ações da classe

const el = require('./elements').ELEMENTS;

class Logon {
    acessarLogin(){
        cy.visit('http://localhost:3000/');
    }
    preencherLogin(){
        cy.get(el.id).type(Cypress.env('createdOngId'));
        cy.get(el.buttonLogin).click();
    }
}

export default new Logon();