// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("createOng", () => {
    //cy.request injeta uma new ong pela API usando metodo POST
    cy.request({
        method: 'POST',
        url: 'http://localhost:3333/ongs',
        body: {
            name: "Gatos queridos",
            email: "gatos@mail.com",
            whatsapp: "519999999999",
            city: "Porto Alegre",
            uf: "RS"    
        }
    }).then(response => {
        expect(response.body.id).is.not.null;
        cy.log(response.body.id);

        //cria e seta variavel global com o ID
        Cypress.env('createdOngId', response.body.id);
    });
})

Cypress.Commands.add('login', () => {
    
    cy.visit('http://localhost:3000/profile', {
        onBeforeLoad: (browser) => {
            browser.localStorage.setItem('ongId', Cypress.env('createdOngId')),
            browser.localStorage.setItem('ongName', 'Gatos queridos')
        }
    });
})

Cypress.Commands.add('createNewIncident', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3333/incidents',
        headers: { 'Authorization': `${ Cypress.env('createdOngId') }`, },
        body: {
            title: "Animal faminto",
            description: "Animal precisa de apoio para ter alimento",
            value: "500"
        }
    }).then(response => {
        expect(response.body.id).is.not.null;
        cy.log(response.body.id);

        //var global de incidente
        Cypress.env('createdIncidentId', response.body.id)
    })
})

Cypress.Commands.add('addCase', () => {
    cy.get('.button').click();

    cy.get('[placeholder="Título do caso"]').type('Animal abandonado');
    cy.get('[placeholder="Descrição"]').type('Animal precisa de apoio para ter onde morar');
    cy.get('[placeholder="Valor em reais"]').type(200);
    
    // Monitorar POST 200 na rota /incidents
    cy.route('POST', '**/incidents').as('newIncident');

    cy.get('.button').click();

    cy.wait('@newIncident').then((xhr) => {
        expect(xhr.status).to.eq(200);
        expect(xhr.response.body).has.property('id');
        expect(xhr.response.body.id).is.not.null;
    })
})