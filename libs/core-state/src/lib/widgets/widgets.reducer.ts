import { Widget } from '@angular-nx/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as WidgetsActions from './widgets.actions';

export const WIDGETS_FEATURE_KEY = 'widgets';

export interface WidgetsState extends EntityState<Widget> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface WidgetsPartialState {
  readonly [ WIDGETS_FEATURE_KEY ]: WidgetsState;
}

export const widgetsAdapter: EntityAdapter<Widget> = createEntityAdapter();

export const initialWidgetsState: WidgetsState = widgetsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false
  }
);

const onFailure = (state: WidgetsState, { error }: any) => ({ ...state, error });

const _widgetsReducer = createReducer(
  initialWidgetsState,
  on(WidgetsActions.selectWidget, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(WidgetsActions.resetSelectedWidget, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(WidgetsActions.resetWidgets, (state) => widgetsAdapter.removeAll(state)),
  // Load widgets
  on(WidgetsActions.loadWidgets, (state) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(WidgetsActions.loadWidgetsSuccess, (state, { widgets }) =>
    widgetsAdapter.setAll(widgets, { ...state, loaded: true })
  ),
  on(WidgetsActions.loadWidgetsFailure, onFailure),
  // Load widget
  on(WidgetsActions.loadWidget, (state) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(WidgetsActions.loadWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.upsertOne(widget, { ...state, loaded: true })
  ),
  on(WidgetsActions.loadWidgetFailure, onFailure),
  // Add widget
  on(WidgetsActions.createWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.addOne(widget, state)
  ),
  on(WidgetsActions.createWidgetFailure, onFailure),
  // Update widget
  on(WidgetsActions.updateWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.updateOne({ id: widget.id!, changes: widget }, state)
  ),
  on(WidgetsActions.updateWidgetFailure, onFailure),
  // Delete widget
  on(WidgetsActions.deleteWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.removeOne(widget.id!, state)
  ),
  on(WidgetsActions.deleteWidgetFailure, onFailure)
);

export function widgetsReducer(
  state: WidgetsState | undefined,
  action: Action
) {
  return _widgetsReducer(state, action);
}
