import { Component, OnInit } from '@angular/core';
import { Widget } from '@angular-nx/api-interfaces';
import { Observable } from 'rxjs';
import { WidgetsFacade } from '@angular-nx/core-state';

@Component({
  selector: 'angular-nx-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  allWidgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;

  constructor(private readonly widgetsFacade: WidgetsFacade) {
  }

  ngOnInit(): void {
    this.widgetsFacade.loadWidgets();
  }
}
