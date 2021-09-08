import { Component } from '@angular/core';
import { Widget } from '@angular-nx/api-interfaces';
import { Observable } from 'rxjs';
import { WidgetsService } from '@angular-nx/core-data';

@Component({
  selector: 'angular-nx-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
  widgets$: Observable<Widget[]> = this.widgetService.all();

  constructor(private readonly widgetService: WidgetsService) {
  }
}
