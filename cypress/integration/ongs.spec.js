/// <reference types="cypress" />

// Na pasta o arquivo index.js será executado
import Logon from '../support/pages/Logon';
import Register from '../support/pages/Register';
import Profile from '../support/pages/Profile';
import NewIncident from '../support/pages/NewIncident';

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        Register.visitRegister();
        Register.setFormValues();
        Register.createRoute();
        Register.saveFormValues();
        Register.validateXhrResponse();
    });

    it('deve poder realizar um login no sistema', () => {
        Logon.acessarLogin();
        Logon.preencherLogin();
    });

    it('deve poder fazer logout', () => {
        cy.login()
        Profile.clickLogoutButton();
    });

    it.only('deve cadastrar novo caso', () => {
        cy.login()

        Profile.clickButtonNewIncident();
        
        NewIncident.setValues();
        NewIncident.createRoute();
        NewIncident.clickSubmit();
        NewIncident.validateSuccessXhrResponse();
    });

    it('deve poder excluir um caso', () => {
        cy.createNewIncident()
        cy.login()

        cy.route('DELETE', '**incidents/*').as('deleteIncident');

        cy.get('[data-cy=button-delete]').click();

        cy.wait('@deleteIncident').then((xhr) => {
            expect(xhr.status).be.eq(204);
            expect(xhr.response.body).to.be.empty;
            cy.log('Deletado com sucesso');
        });
    });
});

// Página ou Páginas(página dentro de pagina)
//  Ações
//  Elementos
//      >> somente mudando os dados