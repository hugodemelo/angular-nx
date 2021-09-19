// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getEntities(): void;
    createEntity(mock: any): void;
    updateEntity(mock: any): void;
    deleteEntity(mock: any): void;
    addEntity(mock: any): void;
  }
}

const API_URL = `${ Cypress.env('apiUrl') }/widgets`;

Cypress.Commands.add('getEntities', () => {
  cy.server();
  cy.route('GET', API_URL, `fixture:widgets`);
});

Cypress.Commands.add('createEntity', entity => {
  cy.server();
  cy.route('POST', API_URL, { entity });
  cy.addEntity(entity);
});

Cypress.Commands.add('updateEntity', entity => {
  cy.server();
  cy.route('PUT', `${ API_URL }/${ entity.id }`, { entity });
  cy.addEntity(entity);
});

Cypress.Commands.add('deleteEntity', entity => {
  cy.server();
  cy.route('DELETE', `${ API_URL }/${ entity.id }`, { entity });
  cy.getEntities();
});

Cypress.Commands.add('addEntity', entity => {
  cy.server();
  cy.fixture('widgets').then(widgets => {
    cy.route('GET', API_URL, [ ...widgets, entity ]);
  });
});
