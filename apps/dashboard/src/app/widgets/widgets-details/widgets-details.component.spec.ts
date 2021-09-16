import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetsDetailsComponent } from './widgets-details.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular-nx/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('WidgetsDetailsComponent', () => {
  let component: WidgetsDetailsComponent;
  let fixture: ComponentFixture<WidgetsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WidgetsDetailsComponent
      ],
      imports: [
        FormsModule,
        MaterialModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
