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
    loadWidgets(): void;
    createWidget(widget: any): void;
  }
}

const API_URL = `${ Cypress.env('apiUrl') }/widgets`;

Cypress.Commands.add('loadWidgets', () => {
  cy.server();
  cy.route('GET', API_URL, 'fixture:widgets');
});

Cypress.Commands.add('createWidget', widget => {
  cy.server();
  cy.route('POST', API_URL, {}); // does nothing, but lets make Cypress happy
  cy.fixture('widgets').then(widgets => {
    cy.route('GET', API_URL, [ ...widgets, widget ]);
  });
});
