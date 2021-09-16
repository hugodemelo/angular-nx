import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { WidgetsListComponent } from '../widgets/widgets-list/widgets-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular-nx/material';
import { of } from 'rxjs';
import { ENVIRONMENT } from '@angular-nx/environment';
import { WidgetsFacade } from '@angular-nx/core-state';

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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        WidgetsListComponent
      ],
      imports: [
        MaterialModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: ENVIRONMENT, useValue: {} },
        { provide: WidgetsFacade, useValue: mockWidgetsFacade }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
