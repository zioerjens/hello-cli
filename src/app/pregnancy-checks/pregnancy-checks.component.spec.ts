import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyChecksComponent } from './pregnancy-checks.component';

describe('PregnancyChecksComponent', () => {
  let component: PregnancyChecksComponent;
  let fixture: ComponentFixture<PregnancyChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnancyChecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancyChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
