const el = require('./elements').ELEMENTS;

class NewIncident {
    setValues(){
        cy.get(el.form.title).type('Animal abandonado');
        cy.get(el.form.description).type('Animal precisa de apoio para ter onde morar');
        cy.get(el.form.value).type(200);
    }

    createRoute(){
        cy.route('POST', '**/incidents').as('newIncident');
    }

    clickSubmit(){
        cy.get(el.buttonSubmit).click();
    }

    validateSuccessXhrResponse(){
        cy.wait('@newIncident').then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })
    }s
}
export default new NewIncident();