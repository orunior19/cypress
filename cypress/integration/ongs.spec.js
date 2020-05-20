/// <reference types="cypress" />

describe('Ongs', () => {
    it.skip('devem poder realizar um cadastro', () => {
        cy.visit('http://localhost:3000/register');
        // cy.get - busca um elemento
        // .type - insere um texto
        cy.get('[data-cy=name]').type('Dogs queridos');
        cy.get('[data-cy=email]').type('dogs@mail.com');
        cy.get('[data-cy=whatsapp]').type('51999999999');
        cy.get('[data-cy=city]').type('Porto Alegre');
        cy.get('[data-cy=uf]').type('RS');

        // routing
        // start server com cy.server()
        // criar uma rota com cy.route()
        // atribuir rota a um alias
        // esperar com cy.wait e fazer uma validação

        cy.route('POST', '**/ongs').as('postOng');

        cy.get('[data-cy=submit]').click();

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        });

    });

    it.skip('deve poder realizar um login no sistema', () => {
        cy.visit('http://localhost:3000/');
        cy.get('input').type(Cypress.env('createdOngId'));
        cy.get('.button').click();
    });

    it.skip('deve poder fazer logout', () => {
        cy.login()
        cy.get('button').click();
    });

    it.skip('deve cadastrar novo caso', () => {
        cy.login()
        cy.addCase()
    });

    it('deve poder excluir um caso', () => {
        cy.createNewIncident()
        cy.login()
        
        //cy.get('li > button > svg');
    });


});

// user login 32d57e1e

// devem poder fazer logout
// deve poder cadastrar novos casos
// deve poder excluir um caso