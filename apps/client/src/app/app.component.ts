import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '@angular-nx/core-data';
import { Observable } from 'rxjs';
import { Widget } from '@angular-nx/api-interfaces';

@Component({
  selector: 'angular-nx-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  widgets$!: Observable<Widget[]>;

  constructor(private readonly widgetService: WidgetsService) {
  }

  ngOnInit() {
    this.widgets$ = this.widgetService.all();
  }
}
