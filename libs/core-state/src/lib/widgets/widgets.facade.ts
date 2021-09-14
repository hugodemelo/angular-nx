import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Widget } from '@angular-nx/api-interfaces';
import { WidgetsService } from '@angular-nx/core-data';

@Injectable()
export class WidgetsFacade {

  readonly #allWidgets = new Subject<Widget[]>();
  readonly #selectedWidget = new Subject<Widget>();
  readonly #mutations = new Subject();

  readonly allWidgets$ = this.#allWidgets.asObservable();
  readonly selectedWidget$ = this.#selectedWidget.asObservable();
  readonly mutations$ = this.#mutations.asObservable();

  constructor(private readonly widgetService: WidgetsService) {
  }

  loadWidgets() {
    this.widgetService.all().subscribe(this.#allWidgets);
  }

  selectWidget(widget: Widget) {
    this.#selectedWidget.next(widget);
  }
}
