import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreDataModule, coreDataRoutes } from '@angular-nx/core-data';
import { CoreStateModule, coreStateRoutes } from '@angular-nx/core-state';
import { MaterialModule, materialRoutes } from '@angular-nx/material';
import { RoutingModule } from './routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsDetailsComponent } from './widgets/widgets-details/widgets-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetsDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
