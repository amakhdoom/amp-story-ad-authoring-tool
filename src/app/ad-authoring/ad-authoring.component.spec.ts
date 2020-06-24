import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatSelectHarness} from '@angular/material/select/testing';

import { AdAuthoringComponent } from './ad-authoring.component';
import { CallToActionMapping } from './call-to-action';

let loader: HarnessLoader;

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
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ad-authoring component', () => {
    expect(component).toBeTruthy();
  });

  // it('should work', async () => {
  //   const buttons = await loader.getAllHarnesses(MatButtonHarness); // len
  // });

  // it('should have correct call to action value from enum', () => {
  //   expect(CallToActionMapping['APPLY_NOW']).toBe('Apply Now');
  // });
  //load mat select and mat inputs
});
