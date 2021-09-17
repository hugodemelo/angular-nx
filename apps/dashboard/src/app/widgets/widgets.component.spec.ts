import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetsComponent } from './widgets.component';
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
import { mockEmptyWidget, mockWidget, mockWidgetsFacade } from '@angular-nx/testing';

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;
  let widgetsFacade: WidgetsFacade;

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
    widgetsFacade = TestBed.inject(WidgetsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call widgetsFacade selectWidget', () => {
    const spy = jest.spyOn(widgetsFacade, 'selectWidget');
    component.selectWidget(mockWidget);
    expect(spy).toHaveBeenCalledWith(mockWidget.id);
  });

  describe('should on save call widgetsFacade', () => {
    it('updateWidget', () => {
      const spy = jest.spyOn(widgetsFacade, 'saveWidget');
      component.saveWidget(mockWidget);
      expect(spy).toHaveBeenCalledWith(mockWidget);
    });

    it('createWidget', () => {
      const spy = jest.spyOn(widgetsFacade, 'saveWidget');
      component.saveWidget(mockEmptyWidget);
      expect(spy).toHaveBeenCalledWith(mockEmptyWidget);
    });
  });

  it('should on delete call widgetsFacade deleteWidget', () => {
    const spy = jest.spyOn(widgetsFacade, 'deleteWidget');
    component.deleteWidget(mockWidget);
    expect(spy).toHaveBeenCalledWith(mockWidget);
  });
});
