import { Widget } from '@angular-nx/api-interfaces';
import { of } from 'rxjs';

export const mockWidgetsFacade = {
  loadWidgets: () => {
  },
  selectWidget: () => {
  },
  deleteWidget: () => {
  },
  saveWidget: () => {
  },
  updateWidget: () => {
  },
  createWidget: () => {
  },
  mutations$: of(true)
};

export const mockWidgetsService = {
  all: () => of([]),
  find: () => of({ ...mockWidget }),
  create: () => of({ ...mockWidget }),
  update: () => of({ ...mockWidget }),
  delete: () => of({ ...mockWidget })
};

export const mockWidget: Widget = {
  id: '0',
  title: 'mock',
  description: 'mock'
};

export const mockEmptyWidget: Widget = {
  id: null,
  title: 'mockEmpty',
  description: 'mockEmpty'
};
