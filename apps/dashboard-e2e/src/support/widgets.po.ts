import { Widget } from '@angular-nx/api-interfaces';

export const getWidgets = () => cy.get('[data-cy=widgets-list]>mat-list-item');

export const createWidget = (widget: Widget) => {
  cy.createWidget(widget);
  cy.get(`[data-cy=widget-form-title]`).type(widget.title, { delay: 10 });
  cy.get(`[data-cy=widget-form-description]`).type(widget.description, { delay: 10 });
  cy.get('[data-cy=widget-form-save]').click();
};

export const getWidgetItem = (widget: Widget) => cy.get(`[data-cy=widget-${ widget.id }-item]`);
