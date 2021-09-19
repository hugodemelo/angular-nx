import { Widget } from '@angular-nx/api-interfaces';

export const state = {
  newMockWidget: {
    id: 'E2E_WIDGET_ID',
    title: 'E2E Mock Widget',
    description: 'E2E Mock Description'
  },
  updatedMockWidget: {
    id: 'E2E_WIDGET_ID',
    title: 'E2E Mock Widget!!',
    description: 'E2E Mock Description Updated'
  }
};

export const getWidgets = () => cy.get('[data-cy=widgets-list]>mat-list-item');

export const getWidgetItem = (widget: Widget) => cy.get(`[data-cy=widget-${ widget.id }-item]`);

export const getWidgetDeleteBtn = (widget: Widget) => cy.get(`[data-cy=delete-widget-${ widget.id }-btn]`);

export const getWidgetDetailsTitle = () => cy.get('[data-cy=widget-details-title]');

export const selectWidget = (widget: Widget) => getWidgetItem(widget).click();

export const clearForm = () => cy.get('[data-cy=widget-form-cancel]').click();

export const completeNewWidgetForm = (widget: Widget) => {
  cy.get(`[data-cy=widget-form-title]`).type(widget.title, { delay: 20 });
  cy.get(`[data-cy=widget-form-description]`).type(widget.description, { delay: 20 });
  cy.get('[data-cy=widget-form-save]').click();
};

export const completeUpdateWidgetForm = (widget: Widget) => {
  cy.get(`[data-cy=widget-form-title]`).clear().type(`${ widget.title }!!`, { delay: 20 });
  cy.get(`[data-cy=widget-form-description]`).clear().type(`${ widget.description } updated`, { delay: 20 });
  cy.get('[data-cy=widget-form-save]').click();
};

export const createWidget = (widget: Widget) => {
  cy.createEntity(widget);
  completeNewWidgetForm(widget);
};

export const updateWidget = (widget: Widget) => {
  cy.updateEntity(widget);
  completeUpdateWidgetForm(widget);
};

export const deleteWidget = (widget: Widget) => {
  cy.deleteEntity(widget);
  getWidgetDeleteBtn(widget).click();
};

export const checkWidgetsLength = (widgets: Widget[]) => {
  getWidgets().should('have.length', widgets.length);
};
