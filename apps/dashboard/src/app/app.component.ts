import { Component } from '@angular/core';

@Component({
  selector: 'angular-nx-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  links: Array<{ path: string; icon: string; title: string }> = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/widgets', icon: 'view_list', title: 'widgets' }
  ];
}
