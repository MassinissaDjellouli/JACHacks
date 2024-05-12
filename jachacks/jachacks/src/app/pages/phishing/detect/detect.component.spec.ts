import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhishingDetectComponent } from './detect.component';

describe('PhishingDetectComponent', () => {
  let component: PhishingDetectComponent;
  let fixture: ComponentFixture<PhishingDetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhishingDetectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhishingDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
