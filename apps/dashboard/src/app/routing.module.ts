import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'widgets', component: WidgetsComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  exports: [ RouterModule ]
})
export class RoutingModule {
}
