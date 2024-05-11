import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhishingCreateComponent } from './create.component';

describe('PhishingCreateComponent', () => {
  let component: PhishingCreateComponent;
  let fixture: ComponentFixture<PhishingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhishingCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhishingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
