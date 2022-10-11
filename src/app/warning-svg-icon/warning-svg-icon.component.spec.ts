import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSvgIconComponent } from './warning-svg-icon.component';

describe('WarningSvgIconComponent', () => {
  let component: WarningSvgIconComponent;
  let fixture: ComponentFixture<WarningSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningSvgIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
