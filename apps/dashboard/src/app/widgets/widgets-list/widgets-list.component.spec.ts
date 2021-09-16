import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetsListComponent } from './widgets-list.component';
import { MaterialModule } from '@angular-nx/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('WidgetsListComponent', () => {
  let component: WidgetsListComponent;
  let fixture: ComponentFixture<WidgetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WidgetsListComponent
      ],
      imports: [
        MaterialModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
