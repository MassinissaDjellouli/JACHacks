import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomtipComponent } from './randomtip.component';

describe('RandomtipComponent', () => {
  let component: RandomtipComponent;
  let fixture: ComponentFixture<RandomtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomtipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
