import { Component, OnInit } from '@angular/core';
import { Widget } from '@angular-nx/api-interfaces';

const mockWidgets: Widget[] = [
  { id: '1', title: 'Widget 01', description: 'Pending' },
  { id: '2', title: 'Widget 02', description: 'Pending' },
  { id: '3', title: 'Widget 03', description: 'Pending' }
];

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
  widgets!: Widget[];
  selectedWidget!: Widget;

  private static getRandomID() {
    return Math.random().toString(36).substring(7);
  }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectedWidget = emptyWidget;
  }

  resetForm() {
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgets = mockWidgets;
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    this.widgets = [ ...this.widgets, { ...widget, id: WidgetsComponent.getRandomID() } ];
    this.resetForm();
  }

  updateWidget(widget: Widget) {
    this.widgets = this.widgets.map(w => widget.id === w.id ? widget : w);
    this.resetForm();
  }

  deleteWidget(widget: Widget) {
    this.widgets = this.widgets.filter(w => widget.id !== w.id);
    this.resetForm();
  }
}
