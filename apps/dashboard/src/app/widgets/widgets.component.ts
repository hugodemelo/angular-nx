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
  allWidgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;
  selectedWidget$: Observable<Widget | undefined> = this.widgetsFacade.selectedWidget$;

  constructor(private widgetsFacade: WidgetsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.widgetsFacade.mutations$.subscribe((_) => this.reset())
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(emptyWidget);
  }

  resetForm() {
    this.selectWidget(emptyWidget);
  }

  selectWidget(widget: Widget) {
    this.widgetsFacade.selectWidget(widget.id!);
  }

  loadWidgets() {
    this.widgetsFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    this.widgetsFacade.saveWidget(widget);
  }

  deleteWidget(widget: Widget) {
    this.widgetsFacade.deleteWidget(widget);
  }
}
