import { Widget } from '@angular-nx/api-interfaces';
import { createWidget, getWidgetItem, getWidgets } from '../support/widgets.po';

describe('Widgets', () => {
  let widgets: Widget[];
  let newMockWidget = {
    id: 'E2E_WIDGET_ID',
    title: 'E2E Mock Widget',
    description: 'E2E Mock Description'
  };

  before(() => {
    cy.fixture('widgets').then(json => widgets = json);
    cy.loadWidgets();
    cy.visit('/widgets');
  });

  it('should list all widgets', () => {
    getWidgets().should('have.length', widgets.length);
  });

  it('should create a widget', () => {
    createWidget(newMockWidget);
    getWidgetItem(newMockWidget).should('exist');
  });
});
