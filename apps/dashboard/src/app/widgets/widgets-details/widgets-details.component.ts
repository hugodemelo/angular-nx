import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@angular-nx/api-interfaces';

@Component({
  selector: 'angular-nx-widgets-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: [ './widgets-details.component.scss' ]
})
export class WidgetsDetailsComponent {
  currentWidget!: Widget;
  originalTitle = '';

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;

  @Input() set widget(value: Widget) {
    if (value) {
      this.originalTitle = value.title;
    }
    this.currentWidget = { ...value };
  };
}
