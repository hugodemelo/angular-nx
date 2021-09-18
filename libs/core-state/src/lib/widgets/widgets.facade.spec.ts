import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { WidgetsFacade } from './widgets.facade';
import * as WidgetsActions from './widgets.actions';
import { initialWidgetsState } from './widgets.reducer';
import { mockWidget } from '@angular-nx/testing';

describe('WidgetsFacade', () => {
  let facade: WidgetsFacade;
  let actionSubject: ActionsSubject;
  let store: MockStore;
  const mockActionsSubject = new ActionsSubject();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WidgetsFacade,
        { provide: ActionsSubject, useValue: mockActionsSubject },
        provideMockStore({ initialState: initialWidgetsState })
      ]
    });

    facade = TestBed.inject(WidgetsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', done => {
    const action = WidgetsActions.createWidget({ widget: mockWidget });
    actionSubject.next(action);

    facade.mutations$.subscribe(dispatchedAction => {
      expect(dispatchedAction).toEqual(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(widget.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');
      const action = WidgetsActions.selectWidget({ selectedId: mockWidget.id! });

      facade.selectWidget(mockWidget.id!);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadWidgets on loadWidgets()', () => {
      const spy = jest.spyOn(store, 'dispatch');
      const action = WidgetsActions.loadWidgets();

      facade.loadWidgets();
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadWidget on loadWidget(widget.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');
      const action = WidgetsActions.loadWidget({ widgetId: mockWidget.id! });

      facade.loadWidget(mockWidget.id!);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createWidget on createWidget(widget)', () => {
      const spy = jest.spyOn(store, 'dispatch');
      const action = WidgetsActions.createWidget({ widget: mockWidget });

      facade.createWidget(mockWidget);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateWidget on updateWidget(widget)', () => {
      const spy = jest.spyOn(store, 'dispatch');
      const action = WidgetsActions.updateWidget({ widget: mockWidget });

      facade.updateWidget(mockWidget);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');
      const action = WidgetsActions.deleteWidget({ widget: mockWidget });

      facade.deleteWidget(mockWidget);
      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
