import { Component, OnInit } from '@angular/core';
import { Widget } from '@angular-nx/api-interfaces';
import { WidgetsFacade } from '@angular-nx/core-state';
import { Observable } from 'rxjs';

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: ''
};

@Component({
  selector: 'angular-nx-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: [ './widgets.component.scss' ]
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;
  selectedWidget$: Observable<Widget> = this.widgetsFacade.selectedWidget$;

  constructor(private readonly widgetsFacade: WidgetsFacade) {
  }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.widgetsFacade.selectWidget(emptyWidget);
  }

  resetForm() {
    this.widgetsFacade.selectWidget(emptyWidget);
  }

  selectWidget(widget: Widget) {
    this.widgetsFacade.selectWidget(widget);
  }

  loadWidgets() {
    this.widgetsFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    throw new Error('Not implemented');
  }

  updateWidget(widget: Widget) {
    throw new Error('Not implemented');
  }

  deleteWidget(widget: Widget) {
    throw new Error('Not implemented');
  }
}
