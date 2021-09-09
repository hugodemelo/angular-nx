import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreDataModule } from '@angular-nx/core-data';
import { CoreStateModule } from '@angular-nx/core-state';
import { MaterialModule } from '@angular-nx/material';
import { RoutingModule } from './routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsDetailsComponent } from './widgets/widgets-details/widgets-details.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UiToolbarModule } from '@angular-nx/ui-toolbar';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetsDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
