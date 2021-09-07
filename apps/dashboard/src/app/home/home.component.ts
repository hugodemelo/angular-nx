import { Component } from '@angular/core';
import { Widget } from '@angular-nx/api-interfaces';

@Component({
  selector: 'angular-nx-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
  widgets: Widget[] = [
    { id: '1', title: 'Widget 01', description: 'Pending' },
    { id: '2', title: 'Widget 02', description: 'Pending' },
    { id: '3', title: 'Widget 03', description: 'Pending' }
  ];
}
