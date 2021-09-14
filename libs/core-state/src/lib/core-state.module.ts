import { NgModule } from '@angular/core';
import { WidgetsFacade } from './widgets/widgets.facade';

@NgModule({
  providers: [ WidgetsFacade ]
})
export class CoreStateModule {
}
