import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCheckerComponent } from './password-checker.component';

describe('PasswordCheckerComponent', () => {
  let component: PasswordCheckerComponent;
  let fixture: ComponentFixture<PasswordCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordCheckerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
