import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiToolbarModule } from '@angular-nx/ui-toolbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiToolbarModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
