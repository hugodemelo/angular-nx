import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetsComponent } from './widgets.component';
import { of } from 'rxjs';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { CoreDataModule } from '@angular-nx/core-data';
import { CoreStateModule, WidgetsFacade } from '@angular-nx/core-state';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular-nx/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { WidgetsDetailsComponent } from './widgets-details/widgets-details.component';
import { ENVIRONMENT } from '@angular-nx/environment';

export const mockWidgetsFacade = {
  loadWidgets: () => {
  },
  selectWidget: () => {
  },
  deleteWidget: () => {
  },
  updateWidget: () => {
  },
  createWidget: () => {
  },
  mutations$: of(true)
};

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WidgetsComponent,
        WidgetsDetailsComponent,
        WidgetsListComponent
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ENVIRONMENT, useValue: {} },
        { provide: WidgetsFacade, useValue: mockWidgetsFacade }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
