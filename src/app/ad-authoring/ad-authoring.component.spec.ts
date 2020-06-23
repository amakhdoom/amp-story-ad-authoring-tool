import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAuthoringComponent } from './ad-authoring.component';
import { CallToActionMapping } from './call-to-action';

describe('AdAuthoringComponent', () => {
  let component: AdAuthoringComponent;
  let fixture: ComponentFixture<AdAuthoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAuthoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAuthoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ad-authoring component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct call to action value from enum', () => {
    expect(CallToActionMapping['APPLY_NOW']).toBe('Apply Now');
  });

});
