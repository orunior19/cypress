// Metodos de ações para interagir com a página Register

const el = require('./elements').ELEMENTS;

class Register {
    visitRegister(){
        cy.visit(el.url);
    }

    setFormValues(){
        cy.get(el.form.name).type('Bartolomeu');
        cy.get(el.form.email).type('bar@tolo.meu');
        cy.get(el.form.whatsapp).type('11900004444');
        cy.get(el.form.city).type('São Paulo');
        cy.get(el.form.uf).type('SP');
    }

    createRoute(){
        cy.route('POST', '**/ongs').as('postOng');
    }

    saveFormValues(){
        cy.get('[data-cy=submit]').click();
    }

    validateXhrResponse(){
        try {
            cy.wait('@postOng').then((xhr) => {
                expect(xhr.status).be.eq(200);
                expect(xhr.response.body).has.property('id');
                expect(xhr.response.body.id).is.not.null;
            });   
        } catch (error) {
            cy.log("Route not Defined or Not Exist", error);
        }
    }
}

export default new Register();