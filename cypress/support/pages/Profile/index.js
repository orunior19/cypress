// Metodos de ações para interagir com Elementos do Header "Global"

const el = require('./elements').ELEMENTS;

class Profile {
    clickLogoutButton(){
        cy.get(el.buttonLogout).click();
    }

    clickButtonNewIncident(){
        cy.get(el.buttonNewIncident).click();
    }
}
export default new Profile();